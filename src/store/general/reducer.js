import { createReducer } from "helpers/store";
import { GENERAL } from "./constants";
import { objToArray } from "utils/converters";

const initialState = {
    withTopBar: true,
    withSideBar: true,
    isAdmin: false,
    isLoading: true,
    testTime: [],
    error: "",
};

const handlers = {
    [GENERAL.INIT.SUCCESS]: (state, { payload }) => ({
        ...state,
        ...payload.settings,
        testTime: objToArray(payload.settings.testTime),
        isLoading: false,
    }),
    [GENERAL.INIT.FAILURE]: (state, { payload }) => ({
        ...state,
        error: payload.error,
        isLoading: false,
    }),
    [GENERAL.ADD_TEST.SUCCESS]: (state, { payload }) => ({
        ...state,
        testTime: [...state.testTime, ...payload.test],
    }),
    [GENERAL.ADD_TEST.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [GENERAL.BOOK_TEST.SUCCESS]: (state, { payload }) => ({
        ...state,
        testTime: { ...state.testTime, ...payload.entity },
    }),
    [GENERAL.BOOK_TEST.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [GENERAL.TOGGLE_TOP_BAR.IDLE]: (state) => ({ ...state, withTopBar: !state.withTopBar }),
    [GENERAL.AUTH_AS_ADMIN.SUCCESS]: (state) => ({ ...state, isAdmin: true }),
};

export const generalReducer = createReducer(initialState, handlers);
