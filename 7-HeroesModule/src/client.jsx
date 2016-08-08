import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './main.scss';
import createStore from './redux/createStore';
import getRoutes from './routes.jsx';

const store = createStore();
const history = syncHistoryWithStore(hashHistory, store);

let component = <Router history={history}>{getRoutes()}</Router>;
if (process.env.NODE_ENV === 'development') {
  const DevTools = require('./containers/DevTools').default;

  component = (
    <div>
      {component}
      <DevTools />
    </div>
  );
}

ReactDOM.render(
  <Provider key="provider" store={store}>
    {component}
  </Provider>,
  document.getElementById('root')
);
