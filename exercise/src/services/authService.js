import AuthApi from '../mockApi/authApi';

class AuthService {
    static getUserData = () => {
        return AuthApi.getUserData();
    }

    static setUserData = (userData) => {
        return AuthApi.setUserData(userData);
    }
}

export default AuthService;