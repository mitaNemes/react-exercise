const delay = 1000;

let user = {
    firstName: '',
    lastName: '',
}

export default class AuthApi {
    static getUserData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user.firstName === '' || user.lastName === '') {
                    return reject('Please sign-up first.... (Click \'singUp\' button)');
                }

                return resolve(Object.assign({}, user));
            }, delay);
        });
    }

    static setUserData(userData) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (userData.firstName === '' || userData.lastName === '') {
                return reject('All fields are required...');
            }

            user = Object.assign({}, user, userData);
            resolve("succes");
          }, delay);
        });
    }
}