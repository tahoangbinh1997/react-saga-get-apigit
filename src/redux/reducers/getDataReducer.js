import * as types from '../actions/actionTypes';

const initialState  = {
    data: null,
    loading: false,
    error: null
}

const getDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DATA:
            return {
                data: null,
                loading: true,
                error: null
            }
        case types.GET_DATA_SUCCESS:
            return {
                data: action.payload.data,
                loading: false,
                error: null
            }
        case types.GET_DATA_FAILED:
            return {
                data: null,
                loading: false,
                error: action.payload.error
            }
        default:
            return {...state}
    }
}

export default getDataReducer;
