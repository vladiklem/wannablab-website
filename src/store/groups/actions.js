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
