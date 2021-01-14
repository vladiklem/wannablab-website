import { call, put, takeLatest } from "redux-saga/effects";

import { EVENTS } from "./constants";
import {
    addEventSuccess,
    initEventsSuccess,
    addEventFailure,
    deleteEventSuccess,
    deleteEventFailure,
    editEventSuccess,
    editEventFailure,
    initEventsFailure,
} from "./actions";

import { firebaseService } from "services/firebaseService";
import { FIREBASE_DATA_EVENTS } from "constants/firebase";

function* initEventsSaga() {
    try {
        const dataSnapshot = yield call(firebaseService.get, FIREBASE_DATA_EVENTS);
        const events = [];

        dataSnapshot.forEach((event) => {
            const data = event.data();

            events.push({ ...data, id: event.id });
        });

        yield put(initEventsSuccess(events));
    } catch (error) {
        yield put(initEventsFailure(error.message));
    }
}

function* addEventSaga({ payload }) {
    try {
        yield call(firebaseService.add, FIREBASE_DATA_EVENTS, payload.event);
        yield put(addEventSuccess(payload.event));
    } catch (error) {
        yield put(addEventFailure(error.message));
    }
}

function* deleteEventSaga({ payload }) {
    try {
        yield call(firebaseService.delete, FIREBASE_DATA_EVENTS, payload.id);
        yield put(deleteEventSuccess(payload.id));
    } catch (error) {
        yield put(deleteEventFailure(error));
    }
}

function* editEventSaga({ payload: { event } }) {
    try {
        yield call(firebaseService.update, FIREBASE_DATA_EVENTS, event.id, event, { merge: true });
        yield put(editEventSuccess(event));
    } catch (error) {
        yield put(editEventFailure(error));
    }
}

export const eventsSaga = [
    takeLatest(EVENTS.INIT.IDLE, initEventsSaga),
    takeLatest(EVENTS.ADD.IDLE, addEventSaga),
    takeLatest(EVENTS.DELETE.IDLE, deleteEventSaga),
    takeLatest(EVENTS.EDIT.IDLE, editEventSaga),
];
