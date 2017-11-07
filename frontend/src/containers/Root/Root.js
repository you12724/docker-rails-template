import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import RouterLink from '../../components/atoms/RouterLink';
import { routeToProject } from '../../actions/routeAction';
import Test from '../../components/Test/Test';
import { indexProject } from '../../actions/projectActions';

const Root = (props) => (
  <div>
    <h2>This is Root container</h2>
    <Test projects={props.projects}/>
    <Link to="/next">next</Link>
    <RouterLink path="next">Link</RouterLink>
  </div>
);

Root.propTypes = {
  projects: PropTypes.array
};

const mapStateToProps = (state) => {
  return ({
    projects: state.projects.projects
  });
};
const mapDispatchToProps = (dispatch) => ({
  boundActions: bindActionCreators({
    indexProject
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
