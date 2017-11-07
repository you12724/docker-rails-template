import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Test from '../../components/Test/Test';
import { indexProject } from '../../actions/projectActions';

const Next = (props) => (
  <div>
    <h2>This is Next container</h2>
    <h2>Next!!!</h2>
    <Test projects={props.projects}/>
  </div>
);

Next.propTypes = {
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
)(Next);
