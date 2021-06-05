import { createReducer } from "helpers/store";
import { APP } from "./constants";

const initialState = {
    withSideBar: true,
    admin: {
        isAdmin: false,
        isVisible: false,
    },
    isLoading: true,
    testTime: [],
    error: "",
};

const handlers = {
    [APP.INIT.SUCCESS]: ({ admin, ...state }, { payload: { settings } }) => ({
        ...state,
        ...settings,
        admin: { ...admin, isAdmin: settings.isAdmin },
        isLoading: false,
    }),
    [APP.INIT.FAILURE]: (state, { payload }) => ({
        ...state,
        error: payload.error,
        isLoading: false,
    }),
    [APP.ADD_TEST.SUCCESS]: (state, { payload }) => ({
        ...state,
        testTime: [...state.testTime, ...payload.test],
    }),
    [APP.ADD_TEST.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [APP.BOOK_TEST.SUCCESS]: (state, { payload }) => ({
        ...state,
        testTime: { ...state.testTime, ...payload.entity },
    }),
    [APP.BOOK_TEST.FAILURE]: (state, { payload }) => ({ ...state, error: payload.error }),
    [APP.ADMIN.AUTH.SUCCESS]: (state) => ({
        ...state,
        admin: { isAdmin: true, isVisible: true },
    }),
    [APP.ADMIN.TOGGLE_VISIBILITY.IDLE]: ({ admin, ...state }, { payload }) => {
        console.log(admin, payload.isVisible);
        return {
            ...state,
            admin: {
                ...admin,
                isVisible: payload.isVisible === null ? !admin.isVisible : payload.isVisible,
            },
        };
    },
};

export const appReducer = createReducer(initialState, handlers);
