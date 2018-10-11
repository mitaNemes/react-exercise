import React from 'react'
import PropTypes from 'prop-types';

const UserListRow = ({user, redirectCallBack}) => {
    let goToUserDetails = () => redirectCallBack(user.login.username);

    return (
        <tr onClick={goToUserDetails} className="user-row">
            <td className="capitalize">{user.name.title}.</td>
            <td className="capitalize">{user.name.first}</td>
            <td className="capitalize">{user.name.last}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
        </tr>
    )
}

UserListRow.propType = {
    user: PropTypes.object.isRequired,
    redirectCallBack: PropTypes.func.isRequired
}

export default UserListRow;