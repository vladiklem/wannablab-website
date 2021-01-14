import { LEADS } from "./constants";

export const addLead = (lead) => ({
    type: LEADS.ADD.IDLE,
    payload: {
        lead,
    },
});

export const addLeadSuccess = () => ({
    type: LEADS.ADD.SUCCESS,
});

export const addLeadFailure = (error) => ({
    type: LEADS.ADD.FAILURE,
    payload: {
        error,
    },
});
