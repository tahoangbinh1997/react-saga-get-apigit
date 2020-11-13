import * as types from './actionTypes';

export const getData = () => ({
    type: types.GET_DATA
});

export const fetchUser = (username) => ({
    type: types.FETCH_USER,
    payload: {
        username: username
    }
});

export const addUser = () => ({
    type: types.ADD_USER
});

export const delUser = (userId) => ({
    type: types.DELETE_USER,
    payload: {
        userId: userId
    }
})
