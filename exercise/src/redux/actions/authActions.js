import authConst from '../constants/authConstants';

export function logIn() {
    return {
        type: authConst.logIn,
        data: true
    };
}

export function logOut() {
    return {
        type: authConst.logOut,
        data: false
    };
}