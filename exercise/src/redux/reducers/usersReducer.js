import * as actions from '../actions/actionTypes';

let initState = [];

export default (state = initState, action) => {
    switch (action.type) {
        case actions.loadUsersSuccess:
            return [
                ...state,
                ...action.users
            ];
        default:
            return state
    }
}

export const getUserByNickName = (users, nickName) => users.find((user) => user.login.username === nickName);