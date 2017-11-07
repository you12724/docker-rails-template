import { fork } from 'redux-saga/effects';
import * as routes from './routesSaga';

export default function* rootSaga() {
  yield fork(routes.handleRoutes);
}
