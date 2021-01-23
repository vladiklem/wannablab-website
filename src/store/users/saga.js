import { takeLatest, call, put } from "redux-saga/effects";

import { firebaseService } from "services/firebaseService";
import { FIREBASE_DATA_USERS } from "constants/firebase";

import { USERS } from "./constants";
import {
    initUsersSuccess,
    initUsersFailure,
    addUserSuccess,
    addUserFailure,
    deleteUserFailure,
    deleteUserSuccess,
    editUserSuccess,
    editUserFailure,
} from "./actions";

function* initUsersSaga() {
    try {
        const dataSnapshot = yield call(firebaseService.get, FIREBASE_DATA_USERS);
        const users = [];

        dataSnapshot.forEach((item) => {
            users.push({ id: item.id, ...item.data() });
        });

        yield put(initUsersSuccess(users));
    } catch(error) {
        yield put(initUsersFailure(error.message));
    }
}

function* addUserSaga({ payload }) {
    try {
        yield call(firebaseService.add, FIREBASE_DATA_USERS, payload.user);
        yield put(addUserSuccess(payload.user));
    } catch (error) {
        yield put(addUserFailure(error.message));
    }
}

function* deleteUserSaga({ payload }) {
    try {
        yield call(firebaseService.delete, FIREBASE_DATA_USERS, payload.id);
        yield put(deleteUserSuccess(payload.id));
    } catch (error) {
        yield put(deleteUserFailure(error.message));
    }
}

function* editUserSaga({ payload: { user } }) {
    try {
        yield call(firebaseService.update, FIREBASE_DATA_USERS, user.id, user, { merge: true });
        yield put(editUserSuccess(user));
    } catch (error) {
        yield put(editUserFailure(error.message));
    }
}

export const usersSaga = [
    takeLatest(USERS.INIT.IDLE, initUsersSaga),
    takeLatest(USERS.ADD.IDLE, addUserSaga),
    takeLatest(USERS.DELETE.IDLE, deleteUserSaga),
    takeLatest(USERS.EDIT.IDLE, editUserSaga),
];
