import React, {Component} from 'react';
import { connect } from 'react-redux';

import { logIn, logOut } from '../../redux/actions/authActions'
import Button from '../Common/Button';
import WelcomeScreen from './Welcome'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid"></div>
          <div className="col-xs-12 col-lg-12" >
            <div className="grey-panel">
              
              { !this.props.isUserLogged
                  ? (<Button clickCallback={this.props.userLoggIn}>LogIn</Button>)
                  : (
                    <div>
                      <WelcomeScreen/>
                      <Button clickCallback={this.props.userLoggOut}>LogOut</Button>
                    </div>
                  )
              }
            </div>
          </div>
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