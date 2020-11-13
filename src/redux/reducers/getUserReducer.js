import * as types from '../actions/actionTypes';

const initialState = {
    user: {
        data: null,
        loading: false,
        error: null
    },
    username: null,
    listUser: {
        data: [],
        error: null
    },
    userId: null
}

const getUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_USER:
            return {
                ...state,
                user: {
                    data: null,
                    loading: true,
                    error: null
                },
                username: action.payload.username
            }
        case types.FETCH_USER_SUCCESS:
            return {
                ...state,
                user: {
                    data: action.payload.user.data,
                    loading: false,
                    error: null
                }
            }
        case types.FETCH_USER_FAILED:
            return {
                ...state,
                user: {
                    data: null,
                    loading: false,
                    error: action.payload.user.error
                }
            }
        case types.ADD_USER:
            return {
                ...state
            }
        case types.ADD_USER_SUCCESS:
            return {
                ...state,
                listUser: {
                    data: action.payload.listUser.data,
                    error: null
                }
            }
        case types.ADD_USER_FAILED:
            return {
                ...state,
                listUser: {
                    ...state.listUser,
                    error: action.payload.listUser.error
                }
            }
        case types.DELETE_USER:
            return {
                ...state,
                userId: action.payload.userId
            }
        case types.DELETE_USER_SUCCESS:
            return {
                ...state,
                listUser: {
                    error: null,
                    data: action.payload.listUser.data
                },
                userId: null
            }
        default:
            return {...state}
    }
}

export default getUserReducer;
