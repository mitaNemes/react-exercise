import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { logInUser, logOutUser } from '../../redux/actions/authActions'
import {Link} from 'react-router-dom';
import Button from './Button';

const styles = {
  logo: {
    float:  'left',
    margin: 8
  }
};

class TopBar extends Component {
  constructor(props) {
    super(props);

    this.getUserInitials = this.getUserInitials.bind(this);
  }

  getUserInitials() {
    return `${this.props.userData.firstName.charAt(0)}${this.props.userData.lastName.charAt(0)}`;
  }

  render() {
    return (
      <header style={{
        height:          48,
        width:           '100%',
        backgroundColor: 'rgb(102,63,180)',
        color:           'white',
        padding:         '6px 10px',
        display:         'flex',
        flexDirection:   'row',
        alignItems:      'center'
      }}
      >
        <div style={styles.logo}>
          <Link to="/">
            <img alt={'logo'} style={{ maxHeight: 40, flex: 1}} src="favicon-196x196.png"/>
          </Link>
        </div>
        <div>
          {'Modus Create'}
        </div>
        <div style={{float: 'left', color: 'white', flex: 1}} />
        { this.props.isUserLogged 
          ? (
            <div style={{float: 'right', paddingRight: 20}}>
              <span className="round-button margin-right-5">{this.getUserInitials()}</span>
              <Button clickCallback={this.props.userLoggOut} propClass='btn btn-primary'>LogOut</Button>
            </div>
          ) : (
            <div style={{float: 'right', paddingRight: 20}}>
              <Button clickCallback={this.props.userLoggIn} propClass='btn btn-primary margin-right-5'>LogIn</Button>
              <Link to="/sign-up" className='btn btn-danger'>SignUp</Link>
            </div>
          )
        }
      </header>
    );
  }
}

TopBar.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  userData: PropTypes.object.isRequired,
  userLoggIn: PropTypes.func.isRequired,
  userLoggOut: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    isUserLogged: state.login.isUserLogged,
    userData: state.login.userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      userLoggIn: () => dispatch(logInUser()),
      userLoggOut: () => dispatch(logOutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
