import * as types from './actionTypes';
import usersService from '../../services/userService';

export const loadUserListSuccess = (users) => {
    console.log(users);
    return { type: types.loadUsersSuccess, users};
}

export const loadUserList = () => {
    return dispatch => {
        return usersService.getUserList().then(users => {
            dispatch(loadUserListSuccess(users.results));
        }).catch(error => {
            throw(error);
        });
    };
}