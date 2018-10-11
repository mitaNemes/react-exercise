import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getUserByNickName } from '../../redux/reducers/rootReducer';
import Breadcrumb from '../Common/Breadcrumb';

class UserDetails extends Component {
  render() {
    let user = this.props.user;
    let pages = [ {
      path: "/home",
      label: "Home"
    }, {
      path: "/user-list",
      label: "User List"
    }, {
      path: `/user-details/${this.props.match.params.userId}`,
      label: this.props.match.params.userId
    }]
    return (
      <div className="container-fluid">
        <div className="col-xs-12 col-lg-12" >
          <Breadcrumb pages={pages}/>
          <div className="grey-panel flex-row">  
            <div className="col-md-2 col-lg-2 col-sm-4">
              <img alt="User Pic" src={user.picture.large} className="img-circle img-responsive"/> 
            </div>
            <div  className=" col-md-10 col-lg-10 col-sm-5">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>First Name</td>
                    <td className="capitalize">{user.name.first}</td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td className="capitalize">{user.name.last}</td>
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