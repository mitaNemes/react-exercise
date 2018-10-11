const delay = 2000;

let user = {
    firstName: '',
    lastName: '',
}

export default class AuthApi {
    static getUserData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user.firstName === '' || user.lastName === '') {
                    return reject('Pleas signUp first.... (Click \'singUp\' button)');
                }

                return resolve(Object.assign({}, user));
            }, delay);
        });
    }

    static setUserData(userData) {
        user = Object.assign({}, user, userData);

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("succes");
          }, delay);
        });
    }
}