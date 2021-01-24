import { call, put, takeLatest } from "redux-saga/effects";

import { firebaseService } from "services/firebaseService";
import { FIREBASE_DATA_GROUPS } from "constants/firebase";

import {
    initGroupsSuccess,
    initGroupsFailure,
    addGroupSuccess,
    addGroupFailure,
    editGroupSuccess,
    editGroupFailure,
} from "./actions";
import { GROUPS } from "./constants";

function* initGroupsSaga() {
    try {
        const dataSnapshot = yield call(firebaseService.get, FIREBASE_DATA_GROUPS);
        const groups = [];

        dataSnapshot.forEach((group) => groups.push({ ...group.data(), id: group.id }));
        yield put(initGroupsSuccess(groups));
    } catch (error) {
        yield put(initGroupsFailure(error.message));
    }
}

function* addGroupSaga({ payload }) {
    try {
        yield call(firebaseService.add, FIREBASE_DATA_GROUPS, payload.group);
        yield put(addGroupSuccess(payload.group));
    } catch (error) {
        yield put(addGroupFailure(error.message));
    }
}

function* editGroupSaga({ payload: { group } }) {
    try {
        yield call(firebaseService.update, FIREBASE_DATA_GROUPS, group.id, group, { merge: true });
        yield put(editGroupSuccess(group));
    } catch (error) {
        yield put(editGroupFailure(error));
    }
}

export const groupsSaga = [
    takeLatest(GROUPS.INIT.IDLE, initGroupsSaga),
    takeLatest(GROUPS.ADD.IDLE, addGroupSaga),
    takeLatest(GROUPS.EDIT.IDLE, editGroupSaga),
];
