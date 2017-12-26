import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  projects: projectReducer,
});

export default rootReducer;
