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

export const authUser = ({ login }) => ({
    type: CURRENT_USER.AUTH.IDLE,
    payload: {
        username: login,
    },
});

export const authUserSuccess = (blaber) => ({
    type: CURRENT_USER.AUTH.SUCCESS,
    payload: {
        blaber,
    },
});