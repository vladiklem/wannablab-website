import { put, call, select, takeLatest } from "redux-saga/effects";

import { firebaseService } from "services/firebaseService";
import { FIREBASE_DATA_GENERAL } from "constants/firebase";

import { GENERAL, testSettingID } from "./constants";
import {
    initGeneralSuccess,
    initGeneralFailure,
    addTestSuccess,
    addTestFailure,
    bookTestSuccess,
    bookTestFailure,
} from "./actions";

function* initGeneralSaga() {
    try {
        const dataSnapshot = yield call(firebaseService.get, FIREBASE_DATA_GENERAL.SLUG);
        const general = {};

        dataSnapshot.forEach((setting) => {
            general[setting.id] = { ...setting.data() };
        });

        yield put(initGeneralSuccess(general));
    } catch (error) {
        yield put(initGeneralFailure(error.message));
    }
}

function* addTestSaga({ payload }) {
    try {
        const entity = { [Date.now()]: payload.test };
        yield call(firebaseService.update, FIREBASE_DATA_GENERAL.SLUG, testSettingID, entity, {
            merge: true,
        });
        yield put(addTestSuccess(entity));
    } catch (error) {
        yield put(addTestFailure(error.message));
    }
}

function* bookTestSaga({ payload }) {
    try {
        const { testTime } = yield select((state) => state.general);
        const testTimeArray = Object.keys(testTime).map((id) => testTime[id]);
        const entity = {
            [payload.id]: { ...testTimeArray.find(({ id }) => id === payload.id), isBooked: true },
        };
        yield call(firebaseService.update, FIREBASE_DATA_GENERAL.SLUG, testSettingID, entity, {
            merge: true,
        });
        yield put(bookTestSuccess(entity));
    } catch (error) {
        yield put(bookTestFailure(error.message));
    }
}

export const generalSaga = [
    takeLatest(GENERAL.INIT.IDLE, initGeneralSaga),
    takeLatest(GENERAL.ADD_TEST.IDLE, addTestSaga),
    takeLatest(GENERAL.BOOK_TEST.IDLE, bookTestSaga),
];
