import { GENERAL } from "./constants";

export const initGeneral = () => ({
    type: GENERAL.INIT.IDLE,
});

export const initGeneralSuccess = (settings) => ({
    type: GENERAL.INIT.SUCCESS,
    payload: {
        settings,
    },
});

export const initGeneralFailure = (error) => ({
    type: GENERAL.INIT.FAILURE,
    payload: {
        error,
    },
});

export const addTest = (test) => ({
    type: GENERAL.ADD_TEST.IDLE,
    payload: {
        test,
    },
});

export const addTestSuccess = (test) => ({
    type: GENERAL.ADD_TEST.SUCCESS,
    payload: {
        test,
    },
});

export const addTestFailure = (error) => ({
    type: GENERAL.ADD_TEST.FAILURE,
    payload: {
        error,
    },
});

export const bookTest = (id) => ({
    type: GENERAL.BOOK_TEST.IDLE,
    payload: {
        id,
    },
});

export const bookTestSuccess = (entity) => ({
    type: GENERAL.BOOK_TEST.SUCCESS,
    payload: {
        entity,
    },
});

export const bookTestFailure = (error) => ({
    type: GENERAL.BOOK_TEST.FAILURE,
    payload: {
        error,
    },
});

export const deleteTest = (id) => ({
    type: GENERAL.DELETE_TEST.IDLE,
    payload: {
        id,
    },
});

export const deleteTestSuccess = (id) => ({
    type: GENERAL.DELETE_TEST.SUCCESS,
    payload: {
        id,
    },
});

export const deleteTestFailure = (error) => ({
    type: GENERAL.DELETE_TEST.FAILURE,
    payload: {
        error,
    },
});
