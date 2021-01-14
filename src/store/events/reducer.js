import { createReducer } from "helpers/store";
import { EVENTS } from "./constants";

const initialState = {
    data: [],
    error: "",
};

const handlers = {
    [EVENTS.INIT.SUCCESS]: (state, { payload }) => ({ ...state, data: payload.events }),
    [EVENTS.INIT.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [EVENTS.ADD.SUCCESS]: (state, { payload }) => ({
        ...state,
        data: [...state.data, payload.event],
    }),
    [EVENTS.ADD.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [EVENTS.DELETE.SUCCESS]: (state, { payload }) => ({
        ...state,
        data: state.data.filter((event) => event.id !== payload.id),
    }),
    [EVENTS.DELETE.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [EVENTS.EDIT.SUCCESS]: (state, { payload }) => ({
        ...state,
        data: state.data.map((item) => (item.id === payload.event.id ? payload.event : item)),
    }),
    [EVENTS.EDIT.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
};

export const eventsReducer = createReducer(initialState, handlers);
