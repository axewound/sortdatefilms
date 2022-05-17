import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.tvmaze.com/schedule',
});

export const usersAPI = {
    getUsers() {
        return instance.get()
            .then(response => {
                return response.data;
            });
    },
    getProfile(airdate) {
        return profileAPI.getProfile(airdate);
    }
}

export const profileAPI = {
    getProfile(airdate) {
        return instance.get(`/?country=US&date=` + airdate);
    }
}

