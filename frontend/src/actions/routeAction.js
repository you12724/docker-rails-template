import { createAction } from 'redux-actions';

const BASE_ACTION_NAME = 'route';

// Link List
export const PROJECTS_URL = '/projects';

// Action Name
export const ROUTE_PROJECT_URL = BASE_ACTION_NAME + PROJECTS_URL;

// Create Action
export const routeToPath = createAction(BASE_ACTION_NAME, (path) => ({ path }));
