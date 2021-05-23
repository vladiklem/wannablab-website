import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import { modalNamesEnum } from "constants/enums";
import { initialModalState } from "constants/initialValues";

import { LoginForm } from "./LoginForm/LoginForm";
import { UniversalModal } from './UniversalModal/UniversalModal';

export const ModalsContainer = ({ modalState = initialModalState, modalProps }) => {
    const [state, setState] = useState(modalState);
    const modal = useSelector(store => store.modals);

    const toggle = useCallback(() => setState((state) => ({ ...state, isOpen: !state.isOpen })), [
        setState,
    ]);

    useEffect(() => {
        setState(modalState);
    }, [modalState]);

    switch (modal.name) {
        case modalNamesEnum.LOGIN:
            return <LoginForm isOpen={state.isOpen} toggle={toggle} {...modalProps} />;
        case modalNamesEnum.AD:
            return <UniversalModal />
        default:
            return null;
    }
};
