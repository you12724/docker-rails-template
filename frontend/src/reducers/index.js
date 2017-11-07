import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import projects from './projectReducer';

const rootReducer = combineReducers({
  routing,
  projects
  // something reducer...
  // something reducer...
  // something reducer...
});

export default rootReducer;
