import { handleActions } from 'redux-actions';

import {
  INDEX_PROJECT_SUCCESS,
  INDEX_PROJECT_FAILURE
} from './../actions/projectActions';

const initialState = {
};

export default handleActions({
  [INDEX_PROJECT_SUCCESS]: (state, action) => ({
    ...state,
    projects: action.payload.data.projects
  }),

  [INDEX_PROJECT_FAILURE]: (state) => ({
    ...state
  })
}, initialState);
