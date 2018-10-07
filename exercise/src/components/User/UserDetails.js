import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserLogged: false
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserLogged: state.login.isUserLogged
  };
};

UserDetails.propTypes = {
  isUserLogged: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(UserDetails);