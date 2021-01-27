import { createReducer } from "helpers/store";
import { GROUPS } from "./constants";

const initialState = {
    data: [],
    error: "",
};

const handlers = {
    [GROUPS.INIT.SUCCUSS]: (state, { payload }) => ({ ...state, data: payload.groups }),
    [GROUPS.INIT.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [GROUPS.ADD.SUCCESS]: (state, { payload }) => ({
        ...state,
        data: [...state.data, payload.group],
    }),
    [GROUPS.ADD.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
};

export const groupsReducer = createReducer(initialState, handlers);