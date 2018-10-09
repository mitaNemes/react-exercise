import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import history from '../history';

import Landing from './Landing';
import PrivateRoute from './PrivateRoute';

import TopBar from '../components/Common/TopBar';
import Home from '../components/Home/Home';
import UserPage from '../components/User/UserPage';
import UserDetails from '../components/User/UserDetails';
  
class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <TopBar />
                    <Route exact path="/" component={Landing}/>
                    <Route path="/home" component={Home}/>
                    <PrivateRoute path="/user-list" redirectPath="/home" isAuthenticated={this.props.isUserLogged} component={UserPage} />
                    <PrivateRoute path="/user-details/:userId" redirectPath="/home" isAuthenticated={this.props.isUserLogged} component={UserDetails} />
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      isUserLogged: state.login.isUserLogged
    };
};

export default connect(mapStateToProps)(App);
