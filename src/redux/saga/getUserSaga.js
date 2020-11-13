import {put, select, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';

import services from '../../services/callAPI';

// const delay = (ms) => new Promise(res => setTimeout(res, ms))

//function*: có ý nghĩa như async function
//yield: có ý nghĩa như await, hành động khai báo trong yield phải được hoàn tất thì mới thức hiện tiếp các hành động khác
//put: có ý nghĩa như dispatch action lên reducer
//takeLateast: là 1 helper chỉ cho phép 1 function được chạy trong 1 thời điểm
//select: sẻ chạy 1 selector function để lấy ra data của các state
function* fetchUser(actions) {
    try {
        const data = yield services.apiUser
            .get(actions.payload.username)
            .then((res) => {
                return Promise.resolve(res.data);
            })
            .catch((error) => {
                return Promise.reject(error)
            });
        yield put({type: types.FETCH_USER_SUCCESS, payload: {user: {data: data}}});
    } catch (error) {
        yield put({type: types.FETCH_USER_FAILED, payload: {user: {error: error.message}}});
    }
}

function* addUser(actions) {
    const {dataUser} = yield select()
    if (dataUser.user.data) {
        let user = dataUser.user.data;
        let list = dataUser.listUser.data;

        let flag = false;
        list.forEach((item) => {
            if (item.id === user.id) {
                flag = true;
            }
        })
        if (flag) {
            return yield put({
                type: types.ADD_USER_FAILED,
                payload: {listUser: {error: 'User Git are already exist in list'}}
            });
        } else {
            list.push(user);
            return yield put({
                type: types.ADD_USER_SUCCESS,
                payload: {listUser: {data: list}}
            });
        }
    }
    return yield put({
        type: types.ADD_USER_FAILED,
        payload: {listUser: {error: 'Please search user Git before add user'}}
    });
}

function* delUser(actions) {
    const {dataUser} = yield select();
    let list = dataUser.listUser.data;
    const userId = actions.payload.userId;
    if (userId) {
        list = list.filter((item) => {
            return item.id !== userId;
        });
        console.log('Current List: ', list)
        return yield put({
            type: types.DELETE_USER_SUCCESS,
            payload: {listUser: {data: list}}
        })
    }
}

export default function* getUserSaga() {
    yield takeLatest(types.FETCH_USER, fetchUser);
    yield takeLatest(types.ADD_USER, addUser);
    yield takeLatest(types.DELETE_USER, delUser)
}
