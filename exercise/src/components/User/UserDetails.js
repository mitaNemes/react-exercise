import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getUserByNickName } from '../../redux/reducers/rootReducer';

class UserDetails extends Component {
  render() {
    let user = this.props.user;
    return (
      <div className="container-fluid">
        <div className="col-xs-12 col-lg-12" >
          <div className="grey-panel">
            <div className="col-md-3 col-lg-3">
              <img alt="User Pic" src={user.picture.large} className="img-circle img-responsive"/> 
            </div>
            <div  className=" col-md-9 col-lg-9 ">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>First Name</td>
                    <td className="capitalizeName">{user.name.first}</td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td className="capitalizeName">{user.name.last}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{user.phone}</td>
                  </tr>
                  <tr>
                    <td>Cell</td>
                    <td>{user.cell}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Link to="/user-list">User List</Link>
      </div>
    );
  }
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: getUserByNickName(state.users, ownProps.match.params.userId)
  };
};

export default connect(mapStateToProps)(UserDetails);