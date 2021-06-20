import { createReducer } from "helpers/store";

import { PROBLEMS } from "./constants";

export const initialState = {
    data: [],
    error: "",
};

export const handlers = {
    [PROBLEMS.INIT.SUCCESS]: (state, { payload }) => ({
        ...state,
        data: payload.problems,
    }),
    [PROBLEMS.INIT.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [PROBLEMS.ADD.SUCCESS]: (state, payload) => ({
        ...state,
        data: [...state.data, payload.problem],
    }),
    [PROBLEMS.ADD.FAILURE]: (state, { payload }) => ({
        ...state,
        error: payload.error,
    }),
    [PROBLEMS.UPDATE.SUCCESS]: (state, { payload }) => ({
        ...state,
        data: state.data.map((item) => (item.id === payload.problem.id ? payload.problem : item)),
    }),
};

export const problemsReducer = createReducer(initialState, handlers);
