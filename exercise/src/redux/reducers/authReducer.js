let initState = {
    isUserLogged: false
};

let toggleLogginState = (state) => {
    let futureState = !state.isUserLogged;
    return {
        ...state,
        isUserLogged: futureState
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'USER_LOGGIN':
            return toggleLogginState(state);
        default:
            return state
    }
}