import { PROBLEMS } from "./constants";

export const initProblems = () => ({
    type: PROBLEMS.INIT.IDLE,
});

export const initProblemsSuccess = (problems) => ({
    type: PROBLEMS.INIT.SUCCESS,
    payload: {
        problems,
    },
});

export const initProblemsFailure = (error) => ({
    type: PROBLEMS.INIT.FAILURE,
    payload: {
        error,
    },
});

export const addProblem = (problem) => ({
    type: PROBLEMS.ADD.IDLE,
    payload: {
        problem,
    },
});

export const addProblemSuccess = (problem) => ({
    type: PROBLEMS.ADD.SUCCESS,
    payload: {
        problem,
    },
});

export const addProblemFailure = (error) => ({
    type: PROBLEMS.ADD.FAILURE,
    payload: {
        error,
    },
});

export const updateProblem = (problem) => ({
    type: PROBLEMS.UPDATE.IDLE,
    payload: {
        problem
    },
});

export const updateProblemSuccess = (problem) => ({
    type: PROBLEMS.UPDATE.SUCCESS,
    payload: {
        problem,
    },
});

export const updateProblemFailure = (error) => ({
    type: PROBLEMS.UPDATE.FAILURE,
    payload: {
        error,
    },
});
