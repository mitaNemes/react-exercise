import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logInUser, logOutUser, clearErrMsg } from "../../redux/actions/authActions";

import Button from "../Common/Button";
import Note from "./Note";
import WelcomeScreen from "./Welcome";

class Home extends Component {
  componentWillUnmount() {
    this.props.clearErrorMsg();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-xs-12 col-lg-12">
          <div className="grey-panel flex-colum">       
            {!this.props.isUserLogged ? (
              <div>
                <Note/>
                { 
                  this.props.error
                    && (<p className="error">{this.props.error}</p>)
                }
                <Button clickCallback={this.props.userLoggIn} propClass='btn btn-primary'>LogIn</Button>
              </div>
            ) : (
              <div>
                <WelcomeScreen />
                <Button clickCallback={this.props.userLoggOut} propClass='btn btn-primary'>LogOut</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  error: PropTypes.string
};

const mapStateToProps = state => {
  return {
    isUserLogged: state.login.isUserLogged,
    error: state.login.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userLoggIn: () => dispatch(logInUser()),
    userLoggOut: () => dispatch(logOutUser()),
    clearErrorMsg: () => dispatch(clearErrMsg())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
