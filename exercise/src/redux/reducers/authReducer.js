import authConst from '../constants/authConstants';

let initState = {
    isUserLogged: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case authConst.logIn:
            return {
                ...state,
                isUserLogged: action.data
            };
        case authConst.logOut:
            return {
                ...state,
                isUserLogged: action.data
            };
        default:
            return state
    }
}