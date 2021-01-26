import { CURRENT_USER } from "./constants";

export const initCurrentUser = () => ({
    type: CURRENT_USER.INIT.IDLE,
});

export const initCurrentUserSuccess = (blaber) => ({
    type: CURRENT_USER.INIT.SUCCESS,
    payload: {
        blaber,
    }
});

export const initCurrentUserFailure = () => ({
    type: CURRENT_USER.INIT.FAILURE,
});

export const authUser = (blaber) => ({
    type: CURRENT_USER.AUTH.IDLE,
    payload: {
        blaber,
    },
});

export const authUserSuccess = (blaber) => ({
    type: CURRENT_USER.AUTH.SUCCESS,
    payload: {
        blaber,
    },
});

export const authUserFailure = (error, data) => ({
    type: CURRENT_USER.AUTH.FAILURE,
    payload: {
        error,
    },
});