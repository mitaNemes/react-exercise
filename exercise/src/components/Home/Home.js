import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import { logIn, logOut } from '../../redux/actions/authActions'
import Button from '../Common/Button';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/user-list">User list</Link>
        { !this.props.isUserLogged
            ? (<Button clickCallback={this.props.userLoggIn}>LogIn</Button>)
            : (<Button clickCallback={this.props.userLoggOut}>LogOut</Button>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserLogged: state.login.isUserLogged
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoggIn: () => dispatch(logIn()),
    userLoggOut: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);