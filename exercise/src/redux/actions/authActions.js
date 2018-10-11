import * as actions from './actionTypes';
import AuthService from '../../services/authService'

const logIn = () => {
    return {
        type: actions.logIn,
        data: true
    };
}

const logOut = () => {
    return {
        type: actions.logOut,
        data: false
    };
}

const setUser = (payload) => {
    return {
        type: actions.setUser,
        data: payload
    };
}

const clearUser = () => {
    return { type: actions.clearUser};
}

const setErrMsg = (payload) => {
    return { 
        type: actions.setErrMsg,
        data: payload
    }
} 

export const clearErrMsg = () => {
    return { type: actions.clearErrMsg};
}

export const logInUser = () => {
    return dispatch => {
        return AuthService.getUserData()
                .then((result) => {
                    dispatch(logIn());
                    dispatch(setUser(result));
                    dispatch(clearErrMsg());
                })
                .catch((error) => {
                    dispatch(setErrMsg(error));
                });
    };
}

export const logOutUser = () => {
    return dispatch => {
        dispatch(logOut());
        dispatch(clearUser());
    }
}

export const signUpUser = (userData) => {
    return dispatch => {
        return AuthService.setUserData(userData)
            .then(() => dispatch(logInUser()))
            .catch((error) => {
                dispatch(setErrMsg(error));
            });
    }
}