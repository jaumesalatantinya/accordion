class UsersService {

    constructor() {
        this.url = 'http://localhost:3000/data/users.json';
    }

    getUsers () {
        return fetch(this.url)
            .then((response) => response.json())
            .then((data) => {
                return data;
            });
    }
}

export default UsersService;
