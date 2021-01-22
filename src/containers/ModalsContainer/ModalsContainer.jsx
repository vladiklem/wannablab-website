import React, { useState, useCallback, useEffect } from "react";

import { modalNamesEnum } from "constants/enums";
import { initialModalState } from "constants/initialValues";

import { LoginForm } from "./components/LoginForm/LoginForm";

export const ModalsContainer = ({ modalState = initialModalState, modalProps }) => {
    const [state, setState] = useState(modalState);

    const toggle = useCallback(() => setState((state) => ({ ...state, isOpen: !state.isOpen })), [
        setState,
    ]);

    useEffect(() => {
        setState(modalState);
    }, [modalState]);

    switch (state.name) {
        case modalNamesEnum.LOGIN:
            return <LoginForm isOpen={state.isOpen} toggle={toggle} {...modalProps} />;
        default:
            return null;
    }
};
