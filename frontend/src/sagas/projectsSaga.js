import { put, take, call } from 'redux-saga/effects';
import { routerActions } from 'react-router-redux';

import { indexProject, indexProjectSuccess } from '../actions/projectActions';

export function* routeToProject() {
  const { data } = yield call(indexProject);
  if (data.error != null) {
    // TODO: エラーハンドリング
    return;
  }
  yield put(indexProjectSuccess(data));
  // 画面遷移
  let routeAction = routerActions.push('/next');
  yield put(routeAction);
}
