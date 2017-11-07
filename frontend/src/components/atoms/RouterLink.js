import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { routeToPath } from '../../actions/routeAction';

class RouterLink extends Component {

  render() {
    let { dispatch, path, children } = this.props;

    return (
      <a onClick={ () => dispatch(routeToPath(path)) }>
        { children }
      </a>
    );
  }
}

RouterLink.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default connect()(RouterLink);
