import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import history from '../history';

import Landing from './Landing';
import PrivateRoute from './PrivateRoute';

import TopBar from '../components/Common/TopBar';
import Home from '../components/Home/Home';
import SignUp from '../components/Home/SignUp';
import UserPage from '../components/User/UserPage';
import UserDetails from '../components/User/UserDetails';
  
class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <TopBar />
                    <div className="main center toppad">
                        <Route exact path="/" component={Landing}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/sign-up" component={SignUp}/>
                        <PrivateRoute path="/user-list" redirectPath="/home" isAuthenticated={this.props.isUserLogged} component={UserPage} />
                        <PrivateRoute path="/user-details/:userId" redirectPath="/home" isAuthenticated={this.props.isUserLogged} component={UserDetails} />
                    </div>
                </div>
            </Router>
        )
    }
}

App.propTypes = {
    isUserLogged: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
      isUserLogged: state.login.isUserLogged
    };
};

export default connect(mapStateToProps)(App);
