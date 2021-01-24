import { call, select, takeLatest, put } from "redux-saga/effects";

import { localStorageService } from "services/localStorageService";
import { LOCAL_STORAGE_CURRENT_USER } from "constants/localStorage";

import { CURRENT_USER } from "./constants";
import { initCurrentUserSuccess, authUserSuccess } from "./actions";

function* initCurrentUserSaga() {
    try {
        const localData = yield call(localStorageService.getItem, LOCAL_STORAGE_CURRENT_USER);
        const blabers = yield select((state) => state.users.data);

        yield put(initCurrentUserSuccess(
            localData.username && blabers.length
                ? {
                      isLoggedIn: true,
                      profile: blabers.find(({ username }) => username === localData.username),
                  }
                : { isLoggedIn: false },
        ));
    } catch (error) {}
}

function* authUserSaga({ payload }) {
    try {
        yield call(localStorageService.setItem, LOCAL_STORAGE_CURRENT_USER, {
            username: payload.username,
        });
        const blabers = yield select((state) => state.users.data);
        console.log(payload);

        yield put(authUserSuccess(
            payload.username && blabers.length
                ? {
                      isLoggedIn: true,
                      profile: blabers.find(({ username }) => username === payload.username),
                  }
                : { isLoggedIn: false },
        ));
    } catch (error) {}
}

export const currentUserSaga = [
    takeLatest(CURRENT_USER.INIT.IDLE, initCurrentUserSaga),
    takeLatest(CURRENT_USER.AUTH.IDLE, authUserSaga),
];
