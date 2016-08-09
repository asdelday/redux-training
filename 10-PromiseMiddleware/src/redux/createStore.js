import { createStore as _createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/root';
import promiseMiddleware from './middleware/promiseMiddleware';
import loggerMiddleware from './middleware/loggerMiddleware';

export default function createStore(initialState) {
  const middleware = [promiseMiddleware, loggerMiddleware];

  let finalCreateStore;
  if (process.env.NODE_ENV === 'development') {
    const { compose } = require('redux');
    const { persistState } = require('redux-devtools');
    const DevTools = require('../containers/DevTools/DevTools').default;

    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  const store = finalCreateStore(rootReducer, initialState);

  // Make Reducers hot loadable
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./modules/root', () => {
      store.replaceReducer(require('./modules/root').default);
    });
  }

  return store;
}
