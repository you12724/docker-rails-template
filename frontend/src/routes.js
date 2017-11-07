import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import store, { history } from './store';
import Root from './containers/Root/Root';
import Next from './containers/Next/Next';

render(
  <Provider store={store}>
    <Router
      history={history}
      onUpadate={() => {
        window.scrollTo(0, 0);
      }} >
      <Route path="/" component={Root}>
      </Route>
      <Route path="/next" component={Next}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
