import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Breadcrumb from '../Common/Breadcrumb';

import {loadUserList} from  '../../redux/actions/usersActions';

import UserListRow from './UserListRow';

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.goToUserDetails = this.goToUserDetails.bind(this);
  }

  componentDidMount() {
    this.props.loadUserList();
  }

  goToUserDetails(username) {
    let encodedUserName = encodeURI(username);
    this.props.history.push(`/user-details/${encodedUserName}`);
  }

  render() {
    let pages = [{
      path: "/home",
      label: "Home"
    },{
      path: "/user-list",
      label: "User List"
    }];

    return (
      <div className="container-fluid">
        <Breadcrumb pages={pages}/>
        <table className="table table-user-information">
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">First Name</th> 
              <th scope="col">Last Name</th> 
              <th scope="col">Email</th> 
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
          { this.props.users.map((user, index) => 
            <UserListRow key={index} user={user} redirectCallBack={this.goToUserDetails}/>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

UserPage.propTypes = {
  users: PropTypes.array.isRequired,
  loadUserList: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserList: () => dispatch(loadUserList())
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(UserPage);