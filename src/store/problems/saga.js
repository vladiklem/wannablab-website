import { put, call, takeLatest } from "redux-saga/effects";

import { firebaseService } from "services/firebaseService";
import { FIREBASE_DATA_PROBLEMS } from "constants/firebase";

import { LEADS } from "./constants";
import {
    addProblemSuccess,
    addProblemFailure,
    initProblemsSuccess,
    initProblemsFailure,
    updateProblemFailure,
    updateProblemSuccess,
} from "./actions";

function* initProblemsSaga() {
    try {
        const dataSnapshot = yield call(firebaseService.get, FIREBASE_DATA_PROBLEMS);
        const problems = [];

        dataSnapshot.forEach((problem) => problems.push({ ...problem.data(), id: problem.id }));
        yield put(initProblemsSuccess(problems));
    } catch (error) {
        yield put(initProblemsFailure(error.message));
    }
}

function* addProblemSaga({ payload }) {
    try {
        yield call(firebaseService.add, FIREBASE_DATA_PROBLEMS, payload.problem);
        yield put(addProblemSuccess());
    } catch (error) {
        yield put(addProblemFailure(error.message));
    }
}

function* updateProblemSaga({ payload: { problem } }) {
    try {
        yield call(firebaseService.update, FIREBASE_DATA_PROBLEMS, problem.id, problem, { merge: true });
        yield put(updateProblemSuccess(problem));
    } catch (error) {
        yield put(updateProblemFailure(error));
    }
}

export const problemsSaga = [
    takeLatest(LEADS.ADD.IDLE, addProblemSaga),
    takeLatest(LEADS.INIT.IDLE, initProblemsSaga),
    takeLatest(LEADS.UPDATE.IDLE, updateProblemSaga),
];
