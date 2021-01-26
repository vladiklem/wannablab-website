import { call, takeLatest, put } from "redux-saga/effects";

import { localStorageService } from "services/localStorageService";
import { LOCAL_STORAGE_CURRENT_USER } from "constants/localStorage";

import { CURRENT_USER } from "./constants";
import { authUserFailure, authUserSuccess } from "./actions";

function* authUserSaga({ payload: { blaber } }) {
    try {
        yield call(localStorageService.setItem, LOCAL_STORAGE_CURRENT_USER, {
            username: blaber.username,
        });

        yield put(blaber.username ? authUserSuccess(blaber) : authUserFailure("No blabber found"));
    } catch (error) {
        yield put(authUserFailure(error.message));
    }
}

export const currentUserSaga = [takeLatest(CURRENT_USER.AUTH.IDLE, authUserSaga)];
