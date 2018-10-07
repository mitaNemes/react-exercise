import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserList extends Component {
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
        <Link to="/home">Home</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserLogged: state.login.isUserLogged
  };
};

UserList.propTypes = {
  isUserLogged: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(UserList);