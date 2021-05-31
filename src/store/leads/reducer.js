import { createReducer } from "helpers/store";

import { LEADS } from "./constants";

export const initialState = {
    data: [],
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
    [LEADS.INIT.SUCCESS]: (state, { payload }) => ({
        ...state,
        data: payload.leads.map((item) => (item.status ? item : { ...item, status: "new" })),
    }),
    [LEADS.INIT.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [LEADS.UPDATE.SUCCESS]: (state, { payload }) => ({
        ...state,
        data: state.data.map((item) => (item.id === payload.lead.id ? payload.lead : item)),
    }),
};

export const leadsReducer = createReducer(initialState, handlers);
