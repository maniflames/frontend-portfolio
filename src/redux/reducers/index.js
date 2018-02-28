import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import projectReducer from './projectReducer';
import projectDetailReducer from './projectDetailReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  projects: projectReducer,
  projectDetail: projectDetailReducer,
});

export default rootReducer;
