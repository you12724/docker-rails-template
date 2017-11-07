import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Test.css';

class Test extends PureComponent {
  render() {
    return (
      <div>
        <p styleName="test">This is Test Component</p>
        <p>{this.props.projects[0].title}</p>
      </div>
    );
  }
}

Test.propTypes = {
  projects: PropTypes.array
};

Test.defaultProps = {
  projects: [{id: 1, title: 'cccc'}]
};

export default Test;
