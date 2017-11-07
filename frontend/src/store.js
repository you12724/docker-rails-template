import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';
import axiosSettings from './utils/axiosSettings';
axiosSettings();

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger();
const middlewares = [
  routerMiddleware(browserHistory),
  sagaMiddleware,
  logger
  // something Middleware...
  // something Middleware...
];

let appliedMiddlewares = applyMiddleware(...middlewares);

const store = createStore(
  rootReducer,
  appliedMiddlewares
);

sagaMiddleware.run(rootSaga);

export const history = syncHistoryWithStore(browserHistory, store, { adjustUrlOnReplay: false });
export default store;
