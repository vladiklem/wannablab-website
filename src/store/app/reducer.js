import { createReducer } from "helpers/store";
import { APP } from "./constants";

const initialState = {
    withSideBar: true,
    admin: {
        isAdmin: false,
        isVisible: false,
        username: "",
        roles: [],
    },
    isLoading: true,
    testTime: [],
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
    [APP.ADMIN.AUTH.SUCCESS]: (state, { payload }) => { console.log(payload); return ({
        ...state,
        admin: { isAdmin: true, isVisible: true, ...payload },
    })},
};

export const appReducer = createReducer(initialState, handlers);
