import React from 'react'
import PropTypes from 'prop-types';

const UserListRow = ({user, redirectCallBack}) => {
    let firstCharToUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    let goToUserDetails = () => redirectCallBack(user.login.username);

    return (
        <tr onClick={goToUserDetails}>
            <td>{firstCharToUpper(user.name.title)}.</td>
            <td>{firstCharToUpper(user.name.first)}</td>
            <td>{firstCharToUpper(user.name.last)}</td>
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