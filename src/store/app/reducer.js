import { createReducer } from "helpers/store";
import { APP } from "./constants";

const initialState = {
    admin: {
        isAdmin: false,
        isVisible: false,
        username: "",
        roles: [],
    },
    header: {
        isVisible: true,
    },
    isLoading: true,
    testTime: [],
    lang: "ua",
    error: "",
};

const handlers = {
    [APP.INIT.SUCCESS]: ({ admin, ...state }, { payload }) => ({
        ...state,
        ...payload,
        admin: { ...admin, ...payload.admin },
        isLoading: false,
    }),
    [APP.INIT.FAILURE]: (state, { payload }) => ({
        ...state,
        error: payload.error,
        isLoading: false,
    }),
    [APP.ADMIN.AUTH.SUCCESS]: (state, { payload }) => ({
        ...state,
        admin: { isAdmin: true, isVisible: true, ...payload },
    }),
    [APP.HEADER.TOGGLE.IDLE]: (state) => ({
        ...state,
        header: { isVisible: !state.header.isVisible },
    }),
    [APP.CHANGE_LANGUAGE.IDLE]: (state, { payload }) => ({
        ...state,
        lang: payload.lang,
    }),
};

export const appReducer = createReducer(initialState, handlers);
