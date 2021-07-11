import { APP } from "./constants";

export const initApp = () => ({
    type: APP.INIT.IDLE,
});

export const initAppSuccess = (settings) => ({
    type: APP.INIT.SUCCESS,
    payload: {
        ...settings,
    },
});

export const initAppFailure = (error) => ({
    type: APP.INIT.FAILURE,
    payload: {
        error,
    },
});

export const appAdminAuth = (data) => ({
    type: APP.ADMIN.AUTH.IDLE,
    payload: { ...data },
});

export const authAsAdminSuccess = (data) => ({
    type: APP.ADMIN.AUTH.SUCCESS,
    payload: { ...data },
});

export const toggleHeader = () => ({
    type: APP.HEADER.TOGGLE.IDLE,
});

export const changeLanguage = (lang) => ({
    type: APP.CHANGE_LANGUAGE.IDLE,
    payload: { lang },
});
