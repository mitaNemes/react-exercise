import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { logIn, logOut } from '../../redux/actions/authActions'
import {Link} from 'react-router-dom';
import Button from './Button';

const styles = {
  logo: {
    float:  'left',
    margin: 8
  }
};

class TopBar extends Component {
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
        <div style={{float: 'right', paddingRight: 20}}>
          {this.renderLogInButton()}
          {this.renderLogOutButton()}
        </div>
      </header>
    );
  }
  
  renderLogInButton() { 
      return ( 
        <span>
          { this.props.isUserLogged ? (
            <Button style={{width: '31px', backgroundColor: 'blue', color: 'white', borderRadius: '50%'}}>MN</Button>
          ) : (
            <Button clickCallback={this.props.userLoggIn} style={{backgroundColor: 'blue', color: 'white'}}>Login</Button>
          )}
        </span>
      )
  }

  renderLogOutButton() {
      return ( 
        <span>
          { this.props.isUserLogged ? (
            <Button clickCallback={this.props.userLoggOut} style={{backgroundColor: 'red', color: 'white'}}>Logout</Button>
          ) : (
            <Button style={{backgroundColor: 'red', color: 'white'}}>Signup</Button>
          )}
        </span>
      )
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

TopBar.propTypes = {
  isUserLogged: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
