import React from 'react'
import PropTypes from 'prop-types';

const UserListRow = ({user, redirectCallBack}) => {
    let goToUserDetails = () => redirectCallBack(user.login.username);

    return (
        <tr onClick={goToUserDetails}>
            <td className="capitalizeName">{user.name.title}.</td>
            <td className="capitalizeName">{user.name.first}</td>
            <td className="capitalizeName">{user.name.last}</td>
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