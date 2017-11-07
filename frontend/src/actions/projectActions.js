import axios from 'axios';
import { createAction } from 'redux-actions';

const BASE_ACTION_NAME = 'project';

export const INDEX_PROJECT_SUCCESS = `${BASE_ACTION_NAME}/index/success`;
export const INDEX_PROJECT_FAILURE = `${BASE_ACTION_NAME}/index/failure`;
export const POST_PROJECT_SUCCESS = `${BASE_ACTION_NAME}/post/success`;
export const POST_PROJECT_FAILURE = `${BASE_ACTION_NAME}/post/failure`;
export const SHOW_PROJECT_SUCCESS = `${BASE_ACTION_NAME}/show/success`;
export const SHOW_PROJECT_FAILURE = `${BASE_ACTION_NAME}/show/failure`;
export const UPDATE_PROJECT_SUCCESS = `${BASE_ACTION_NAME}/update/success`;
export const UPDATE_PROJECT_FAILURE = `${BASE_ACTION_NAME}/update/failure`;
export const DESTROY_PROJECT_SUCCESS = `${BASE_ACTION_NAME}/destroy/success`;
export const DESTROY_PROJECT_FAILURE = `${BASE_ACTION_NAME}/destroy/failure`;

export const indexProjectSuccess = createAction(INDEX_PROJECT_SUCCESS);
export const indexProjectFailure = createAction(INDEX_PROJECT_FAILURE);
export const postProjectSuccess = createAction(POST_PROJECT_SUCCESS);
export const postProjectFailure = createAction(POST_PROJECT_FAILURE);
export const showProjectSuccess = createAction(SHOW_PROJECT_SUCCESS);
export const showProjectFailure = createAction(SHOW_PROJECT_FAILURE);
export const updateProjectSuccess = createAction(UPDATE_PROJECT_SUCCESS);
export const updateProjectFailure = createAction(UPDATE_PROJECT_FAILURE);
export const destroyProjectSuccess = createAction(DESTROY_PROJECT_SUCCESS);
export const destroyProjectFailure = createAction(DESTROY_PROJECT_FAILURE);

export const indexProject = () =>
  axios.get('/api/v1/projects')
    .then((data) => data)
    .catch((error) => error);
