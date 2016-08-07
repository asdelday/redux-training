import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './main.scss';
import createStore from './redux/createStore';
import { App } from './containers';

const store = createStore();

let component = <App />;
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
