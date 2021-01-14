import { createReducer } from "helpers/store";

import { LEADS } from "./constants";

export const initialState = {
    error: "",
    isLoading: false,
    isSuccess: false,
};

export const handlers = {
    [LEADS.ADD.IDLE]: (state) => ({ ...state, isLoading: true }),
    [LEADS.ADD.SUCCESS]: (state) => ({ ...state, isSuccess: true, isLoading: false }),
    [LEADS.ADD.FAILURE]: (state, { payload }) => ({
        ...state,
        error: payload.error,
        isLoading: false,
    }),
};

export const leadsReducer = createReducer(initialState, handlers);
