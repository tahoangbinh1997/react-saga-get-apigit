import { fork } from 'redux-saga/effects';
import getDataSaga from './getDataSaga';
import getUserSaga from './getUserSaga';

export default function* rootSaga() {
    yield fork(
        getDataSaga
    );
    yield fork(
        getUserSaga
    )
}
