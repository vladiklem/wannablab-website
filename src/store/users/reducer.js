import { createReducer } from "helpers/store";
import { USERS } from "./constants";

const initialState = {
    data: [],
    error: "",
};

const handlers = {
    [USERS.INIT.SUCCESS]: (state, { payload }) => ({ ...state, data: payload.users }),
    [USERS.INIT.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [USERS.ADD.SUCCESS]: (state, { payload }) => ({
        ...state,
        data: [...state.data, payload.user],
    }),
    [USERS.ADD.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [USERS.DELETE.SUCCESS]: (state, { payload }) => ({
        ...state,
        data: state.data.filter((user) => user.id !== payload.id),
    }),
    [USERS.DELETE.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [USERS.EDIT.SUCCESS]: (state, { payload }) => ({
        ...state,
        data: state.data.map((user) => (user.id === payload.user.id ? payload.user : user)),
    }),
    [USERS.EDIT.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
};

export const usersReducer = createReducer(initialState, handlers);
