import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './main.scss';
import createStore from './redux/createStore';
import { App } from './containers';

const store = createStore();

const component = (
  <Provider key="provider" store={store}>
    <App />
  </Provider>
);

ReactDOM.render(component, document.getElementById('root'));
