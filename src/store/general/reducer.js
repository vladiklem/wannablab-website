import { createReducer } from "helpers/store";
import { GENERAL } from "./constants";
import { objToArray } from "utils/converters";

const initialState = {
    withTopBar: true,
    withSideBar: true,
    testTime: [],
    error: "",
};

const handlers = {
    [GENERAL.INIT.SUCCESS]: (state, { payload }) => ({
        ...state,
        ...payload.settings,
        testTime: objToArray(payload.settings.testTime),
    }),
    [GENERAL.INIT.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [GENERAL.ADD_TEST.SUCCESS]: (state, { payload }) => ({
        ...state,
        testTime: { ...state.testTime, ...payload.test },
    }),
    [GENERAL.ADD_TEST.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [GENERAL.BOOK_TEST.SUCCESS]: (state, { payload }) => ({
        ...state,
        testTime: { ...state.testTime, ...payload.entity },
    }),
    [GENERAL.BOOK_TEST.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
};

export const generalReducer = createReducer(initialState, handlers);
