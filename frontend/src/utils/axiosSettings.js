import axios from 'axios';
import docCookies from './docCookies';

const XSRF_TOKEN = 'XSRF-TOKEN';
const X_XSRF_TOKEN = 'X-XSRF-TOKEN';

// Cookieに'XSRF-TOKEN'が存在する場合、
// それをaxiosのリクエストに独自ヘッダX-XSRF-TOKENに加える
export default () => {
  if (docCookies.hasItem(XSRF_TOKEN)) {
    axios.defaults.headers.common[X_XSRF_TOKEN] =
      docCookies.getItem(XSRF_TOKEN);
  }

  axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
  axios.defaults.baseURL = 'http://localhost:9090/http://0.0.0.0';
};
