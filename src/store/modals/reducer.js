import { createReducer } from "helpers/store";
import { modalNamesEnum } from "constants/enums";

export const initialState = {
    name: modalNamesEnum.NONE,
    isOpen: false,
};

export const handlers = {
    [modalNamesEnum.AD]: (state, action) => ({
        name: action.name,
        isOpen: !state.isOpen,
    }),
};

export const modalsReducer = createReducer(initialState, handlers);
