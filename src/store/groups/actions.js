import { GROUPS } from "./constants";

export const initGroups = () => ({
    type: GROUPS.INIT.IDLE,
});

export const initGroupsSuccess = (groups) => ({
    type: GROUPS.INIT.SUCCUSS,
    payload: {
        groups,
    },
});

export const initGroupsFailure = (error) => ({
    type: GROUPS.INIT.FAILURE,
    payload: {
        error,
    },
});

export const addGroup = (group) => ({
    type: GROUPS.ADD.IDLE,
    payload: {
        group,
    },
});

export const addGroupSuccess = (group) => ({
    type: GROUPS.ADD.SUCCESS,
    payload: {
        group,
    },
});

export const addGroupFailure = (error) => ({
    type: GROUPS.ADD.FAILURE,
    payload: {
        error,
    },
});

export const deleteGroup = (id) => ({
    type: GROUPS.DELETE.IDLE,
    payload: {
        id,
    },
});

export const deleteGroupSuccess = (id) => ({
    type: GROUPS.DELETE.SUCCESS,
    payload: {
        id,
    },
});

export const deleteGroupFailure = (error) => ({
    type: GROUPS.DELETE.FAILURE,
    payload: {
        error,
    },
});

export const updateGroup = (group) => ({
    type: GROUPS.UPDATE.IDLE,
    payload: {
        group,
    },
});

export const updateGroupSuccess = (group) => ({
    type: GROUPS.UPDATE.SUCCESS,
    payload: {
        group,
    },
});

export const updateGroupFailure = (error) => ({
    type: GROUPS.UPDATE.FAILURE,
    payload: {
        error,
    },
});
