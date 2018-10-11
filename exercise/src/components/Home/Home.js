import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logInUser, logOutUser } from "../../redux/actions/authActions";
import Button from "../Common/Button";
import WelcomeScreen from "./Welcome";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-xs-12 col-lg-12">
          <div className="grey-panel">
            {!this.props.isUserLogged ? (
              <div>
                {this.props.error && (
                  <p className="error">{this.props.error}</p>
                )}
                <Button clickCallback={this.props.userLoggIn}>LogIn</Button>
              </div>
            ) : (
              <div>
                <WelcomeScreen />
                <Button clickCallback={this.props.userLoggOut}>LogOut</Button>
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
    userLoggOut: () => dispatch(logOutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
