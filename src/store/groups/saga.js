import { call, put, takeLatest } from "redux-saga/effects";

import { firebaseService } from "services/firebaseService";
import { FIREBASE_DATA_GROUPS } from "constants/firebase";

import { initGroupsSuccess, initGroupsFailure } from "./actions";
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

export const groupsSaga = [takeLatest(GROUPS.INIT.IDLE, initGroupsSaga)];
