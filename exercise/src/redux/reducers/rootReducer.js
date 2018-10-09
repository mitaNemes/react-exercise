import { combineReducers } from 'redux';
import login from './authReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
    login,
    users
});

export default rootReducer;