import 'babel-polyfill';
import { put, take, call, fork } from 'redux-saga/effects';

import { routeToPath } from '../actions/routeAction';
import { routeToProject } from './projectsSaga';
// import { POST_USER_CONFIRM, POST_CLIENT_CONFIRM } from '../actions/index/index';
// import { FETCH_REQUEST, FETCH_CONFIRM_SUCCESS } from '../actions/status';


// export function* toProject() {
//   yield take([`${routeToProject}`]);
//   const { data } = yield call(indexProject);
//   if (data.error != null) {
//     // TODO: エラーハンドリング
//     return;
//   }
//   yield put(indexProjectSuccess(data));
//   // 画面遷移
//   let routeAction = routerActions.push('/next');
//   yield put(routeAction);
// }

/*
  ルーティングを捌く関数
  pathによってその他のfunctionを呼び出す
*/
export function* handleRoutes() {
  const { payload } = yield take([`${routeToPath}`]);
  console.log(payload);
  // TODO: pathごとにfork, fork先でAPIを呼ぶ
  yield fork(routeToProject);
}

export function* test() {
  /*
  while (true) {
    const action = yield take([`${LOCATION_CHANGE}`]);
    // 割り込み阻止のために FETCH_REQUEST を発火
    yield put(FETCH_REQUEST());
    // 発火すべきアクションとともに認可内容を取得
    const actions = getActionFromPath(action.payload.pathname);

    // stateからauth情報を取得
    const { auth } = yield select();

    // 認可内容にて分岐
    if (actions[0] === 1 && auth.userId === 0) {
      // userIdがstateに存在しない場合、strageからLoginしているかを確認
      yield put(POST_USER_CONFIRM());
      yield take([`${FETCH_CONFIRM_SUCCESS}`]);

    } else if (actions[0] === 2) {
      // companyIdがstateに存在しない場合、strageからLoginしているかを確認
      yield put(POST_CLIENT_CONFIRM());
      yield take([`${FETCH_CONFIRM_SUCCESS}`]);
    }
    yield put(actions[1]);
  }
  */
}
