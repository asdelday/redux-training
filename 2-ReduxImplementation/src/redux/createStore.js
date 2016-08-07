import { createStore as _createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/root';

export default function createStore(initialState) {
  const middleware = [];
  const finalCreateStore = applyMiddleware(...middleware)(_createStore);
  const store = finalCreateStore(rootReducer, initialState);

  // Make Reducers hot loadable
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./modules/root', () => {
      store.replaceReducer(require('./modules/root').default);
    });
  }

  return store;
}
