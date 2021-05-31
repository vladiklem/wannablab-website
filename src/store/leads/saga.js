import { put, call, takeLatest } from "redux-saga/effects";

import { firebaseService } from "services/firebaseService";
import { FIREBASE_DATA_LEADS } from "constants/firebase";

import { LEADS } from "./constants";
import {
    addLeadSuccess,
    addLeadFailure,
    initLeadsSuccess,
    initLeadsFailure,
    updateLeadFailure,
    updateLeadSuccess,
} from "./actions";

function* initLeadsSaga() {
    try {
        const dataSnapshot = yield call(firebaseService.get, FIREBASE_DATA_LEADS);
        const leads = [];

        dataSnapshot.forEach((lead) => leads.push({ ...lead.data(), id: lead.id }));
        yield put(initLeadsSuccess(leads));
    } catch (error) {
        console.error(error);
        yield put(initLeadsFailure(error.message));
    }
}

function* addLeadSaga({ payload }) {
    try {
        yield call(firebaseService.add, FIREBASE_DATA_LEADS, payload.lead);
        yield put(addLeadSuccess());
    } catch (error) {
        yield put(addLeadFailure(error.message));
    }
}

function* updateLeadSaga({ payload: { lead } }) {
    try {
        yield call(firebaseService.update, FIREBASE_DATA_LEADS, lead.id, lead, { merge: true });
        yield put(updateLeadSuccess(lead));
    } catch (error) {
        yield put(updateLeadFailure(error));
    }
}

export const leadsSaga = [
    takeLatest(LEADS.ADD.IDLE, addLeadSaga),
    takeLatest(LEADS.INIT.IDLE, initLeadsSaga),
    takeLatest(LEADS.UPDATE.IDLE, updateLeadSaga),
];
