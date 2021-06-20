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

export const addTest = (test) => ({
    type: APP.ADD_TEST.IDLE,
    payload: {
        test,
    },
});

export const addTestSuccess = (test) => ({
    type: APP.ADD_TEST.SUCCESS,
    payload: {
        test,
    },
});

export const addTestFailure = (error) => ({
    type: APP.ADD_TEST.FAILURE,
    payload: {
        error,
    },
});

export const bookTest = (id) => ({
    type: APP.BOOK_TEST.IDLE,
    payload: {
        id,
    },
});

export const bookTestSuccess = (entity) => ({
    type: APP.BOOK_TEST.SUCCESS,
    payload: {
        entity,
    },
});

export const bookTestFailure = (error) => ({
    type: APP.BOOK_TEST.FAILURE,
    payload: {
        error,
    },
});

export const deleteTest = (id) => ({
    type: APP.DELETE_TEST.IDLE,
    payload: {
        id,
    },
});

export const deleteTestSuccess = (id) => ({
    type: APP.DELETE_TEST.SUCCESS,
    payload: {
        id,
    },
});

export const deleteTestFailure = (error) => ({
    type: APP.DELETE_TEST.FAILURE,
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
