import * as actions from '../actions/actionTypes';

let initState = {
    authError: null,
    isUserLogged: false,
    userData: {
        firstName: '',
        lastName: ''
    }
};

export default (state = initState, action) => {
    switch (action.type) {
        case actions.logIn:
            return {
                ...state,
                isUserLogged: action.data
            };
        case actions.logOut:
            return {
                ...state,
                isUserLogged: action.data
            };
        case actions.setUser:
            return {
                ...state,
                userData: action.data
            };
        case actions.clearUser:
            return {
                ...state,
                userData: initState.userData
            };
        case actions.setErrMsg:
            return {
                ...state,
                authError: action.data
            };
        case actions.clearErrMsg:
            return {
                ...state,
                authError: initState.authError
            };
        default:
            return state
    }
}