const delay = 1000;

const users = [
    {
        "name": "Peter",
        "email": "peter@peter.es"
    },
    {
        "name": "Dan",
        "email": "dan@dan.es"
    },
    {
        "name": "Tomas",
        "email": "tomas@tomas.es"
    }
];


class UsersService {

    static getUsers () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], users));
            }, delay);
        });
    }
}

export default UsersService;
