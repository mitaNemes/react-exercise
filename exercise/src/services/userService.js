export default class userService {
    static getUserList = () => {
        return fetch("https://randomuser.me/api/?results=20")
                .then(response => response.json())
                .catch(error => error);
    }
}