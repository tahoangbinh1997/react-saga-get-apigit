import { put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';

import services from "../../services/callAPI";

const path = 'products';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* getDataFunction(actions) {
    yield delay(2500)
    try {
        const data = yield services.apiData
            .get(path)
            .then((res) => {
                return Promise.resolve(res.data)
            })
            .catch((error) => {
                return Promise.reject(error)
            });
        console.log('Data: ', data);
        yield put({type: types.GET_DATA_SUCCESS, payload: {data: data}});
    }
    catch (error) {
        console.log(error.message)
        yield put({type: types.GET_DATA_FAILED, payload: {error: error.message}})
    }
}

export default function* getDataSaga() {
    yield takeLatest(types.GET_DATA, getDataFunction);
}
