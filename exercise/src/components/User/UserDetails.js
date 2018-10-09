import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }

    this.getUserByNickname = this.getUserByNickname.bind(this);
  }

  componentDidMount() {
    this.setState({user: this.getUserByNickname()});
  }

  getUserByNickname() {
    this.props.users.filter((user) => user.login.username === decodeURI(this.props.match.params.userId));
  }

  render() {
    console.log(this.state.user);
    return (
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <Link to="/home">Home</Link>
      </div>
    );
  }
}

UserDetails.propTypes = {
  users: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UserDetails);