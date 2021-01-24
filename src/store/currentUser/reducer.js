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

const setBlaber = (state, { payload }) => ({
    ...state,
    ...(payload.blaber.isLoggedIn ? {
        isLoading: false,
    isLoggedIn: true,
    type: userTypesEnum.BLABER,
    profile: payload.blaber.profile,
    } : payload.blaber),
});

export const handlers = {
    [CURRENT_USER.INIT.SUCCESS]: setBlaber,
    [CURRENT_USER.AUTH.SUCCESS]: setBlaber,
};

export const currentUserReducer = createReducer(initialState, handlers);
