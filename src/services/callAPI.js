import axios from 'axios';

const dataURL = 'https://cash-less-app.herokuapp.com';

const apiData = axios.create({
    baseURL: `${dataURL}/`
});

const dataUser = 'https://api.github.com/users/';

const apiUser = axios.create({
    baseURL: `${dataUser}/`
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    apiData,
    apiUser
};
