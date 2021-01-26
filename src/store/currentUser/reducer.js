import { createReducer } from "helpers/store";
import { userTypesEnum } from "constants/enums";

import { CURRENT_USER } from "./constants";

export const initialState = {
    type: userTypesEnum.GUEST,
    isLoggedIn: false,
    isLoading: true,
    profile: {
        subscribtionStart: Date.now(),
        subscriptionEnd: Date.now(),
    },
};

export const handlers = {
    [CURRENT_USER.AUTH.SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoggedIn: true,
        isLoading: false,
        type: userTypesEnum.BLABER,
        profile: payload.blaber,
    }),
    [CURRENT_USER.AUTH.FAILURE]: (state, { payload }) => ({
        ...state,
        error: payload.error,
        isLoggedIn: false,
        isLoading: false,
    }),
    [CURRENT_USER.INIT.FAILURE]: (state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: false,
    }),
};

export const currentUserReducer = createReducer(initialState, handlers);
