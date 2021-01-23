import { createReducer } from "helpers/store";
import { userTypesEnum } from "constants/enums";

export const initialState = {
    type: userTypesEnum.GUEST,
    profile: {
        subscribtionStart: Date.now(),
        subscriptionEnd: Date.now(),
    },
};

export const handlers = {};

export const currentUserReducer = createReducer(initialState, handlers);