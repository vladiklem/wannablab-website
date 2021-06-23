import { put, call, takeLatest } from "redux-saga/effects";

import { firebaseService } from "services/firebaseService";
import { localStorageService } from "services/localStorageService";
import { FIREBASE_DATA_APP } from "constants/firebase";
import { LOCAL_STORAGE_APP } from "constants/localStorage";

import { APP } from "./constants";
import { initAppSuccess, initAppFailure, authAsAdminSuccess } from "./actions";

function* initAppSaga() {
    try {
        const dataSnapshot = yield call(firebaseService.get, FIREBASE_DATA_APP.SLUG);
        const app = {};

        dataSnapshot.forEach((setting) => {
            app[setting.id] = { ...setting.data() };
        });

        const localData = yield call(localStorageService.init);

        yield put(initAppSuccess({ ...app, admin: { ...localData } }));
    } catch (error) {
        yield put(initAppFailure(error.message));
    }
}

function* authAsAdminSaga({ payload: { username, roles } }) {
    try {
        const data = {
            isAdmin: true,
            username,
            roles,
        };
        yield call(localStorageService.setItem, LOCAL_STORAGE_APP, data);
        yield put(authAsAdminSuccess(data));
    } catch (error) {}
}

export const appSaga = [
    takeLatest(APP.INIT.IDLE, initAppSaga),
    takeLatest(APP.ADMIN.AUTH.IDLE, authAsAdminSaga),
];
