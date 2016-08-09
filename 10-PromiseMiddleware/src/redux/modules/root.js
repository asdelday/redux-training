import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import app from './app';
import heroes from './heroes';

export default combineReducers({
  routing,
  app,
  heroes,
});
