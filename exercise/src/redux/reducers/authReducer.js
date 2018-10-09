import * as actions from '../actions/actionTypes';

let initState = {
    isUserLogged: false
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
        default:
            return state
    }
}