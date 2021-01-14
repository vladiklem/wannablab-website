import { put, call, takeLatest } from "redux-saga/effects";

import { firebaseService } from "services/firebaseService";
import { FIREBASE_DATA_LEADS } from "constants/firebase";

import { LEADS } from "./constants";
import { addLeadSuccess, addLeadFailure } from "./actions";

function* addLeadSaga({ payload }) {
    try {
        yield call(firebaseService.add, FIREBASE_DATA_LEADS, payload.lead);
        yield put(addLeadSuccess());
    } catch (error) {
        yield put(addLeadFailure(error.message));
    }
}

export const leadsSaga = [takeLatest(LEADS.ADD.IDLE, addLeadSaga)];
