import { createReducer } from "helpers/store";
import { modalNamesEnum } from "constants/enums";

export const initialState = {
    name: modalNamesEnum.NONE,
    isOpen: false,
};

export const handlers = {
    [modalNamesEnum.AD]: (state, action) => ({
        name: action.name,
        isOpen: state.name === action.name ? !state.isOpen : true,
    }),
    [modalNamesEnum.LOGIN]: (state, action) => ({
        name: action.name,
        isOpen: state.name === action.name ? !state.isOpen : true,
    }),
};

export const modalsReducer = createReducer(initialState, handlers);
