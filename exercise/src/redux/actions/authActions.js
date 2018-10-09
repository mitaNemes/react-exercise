import * as actions from './actionTypes';

export function logIn() {
    return {
        type: actions.logIn,
        data: true
    };
}

export function logOut() {
    return {
        type: actions.logOut,
        data: false
    };
}