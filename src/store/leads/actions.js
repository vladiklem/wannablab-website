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

export const initLeads = () => ({
    type: LEADS.INIT.IDLE,
});

export const initLeadsSuccess = (leads) => ({
    type: LEADS.INIT.SUCCESS,
    payload: {
        leads,
    },
});

export const initLeadsFailure = (error) => ({
    type: LEADS.INIT.FAILURE,
    payload: {
        error,
    },
});

export const updateLead = (lead) => ({
    type: LEADS.UPDATE.IDLE,
    payload: {
        lead
    },
});

export const updateLeadSuccess = (lead) => ({
    type: LEADS.UPDATE.SUCCESS,
    payload: {
        lead,
    },
});

export const updateLeadFailure = (error) => ({
    type: LEADS.UPDATE.FAILURE,
    payload: {
        error,
    },
});
