import { EVENTS } from "./constants";

export const initEvents = () => ({
    type: EVENTS.INIT.IDLE,
});

export const initEventsSuccess = (events) => ({
    type: EVENTS.INIT.SUCCESS,
    payload: {
        events,
    },
});

export const initEventsFailure = (error) => ({
    type: EVENTS.INIT.FAILURE,
    payload: {
        error,
    },
});

export const addEvent = (event) => ({
    type: EVENTS.ADD.IDLE,
    payload: {
        event,
    },
});

export const addEventSuccess = (event) => ({
    type: EVENTS.ADD.SUCCESS,
    payload: {
        event,
    },
});

export const addEventFailure = (error) => ({
    type: EVENTS.ADD.FAILURE,
    payload: {
        error,
    },
});

export const deleteEvent = (id) => ({
    type: EVENTS.DELETE.IDLE,
    payload: {
        id,
    },
});

export const deleteEventSuccess = (id) => ({
    type: EVENTS.DELETE.SUCCESS,
    payload: {
        id,
    },
});

export const deleteEventFailure = (error) => ({
    type: EVENTS.DELETE.FAILURE,
    payload: {
        error,
    },
});

export const editEvent = (event) => ({
    type: EVENTS.EDIT.IDLE,
    payload: {
        event,
    },
});

export const editEventSuccess = (event) => ({
    type: EVENTS.EDIT.SUCCESS,
    payload: {
        event,
    },
});

export const editEventFailure = (error) => ({
    type: EVENTS.EDIT.FAILURE,
    payload: {
        error,
    },
});
