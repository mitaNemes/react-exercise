import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import { logIn } from '../../redux/actions/loginActions'
import Button from '../Common/Button';

class Home extends Component {
  logIn() {
    this.props.userLoggin();
  };

  render() {
    let buttonText = !this.props.isUserLogged ? "LogIn" : "LogOut";

    return (
      <div>
        <Link to="/user-list">User list</Link>
        <Button clickCallback={this.logIn.bind(this)}>{buttonText}</Button>
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
      userLoggin: () => dispatch(logIn())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);