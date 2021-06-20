import React from "react";
import { Modal } from "reactstrap";

import { ProblemForm } from "forms/ProblemForm/ProblemForm";

export const LoginForm = ({ isOpen, toggle }) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ProblemForm />
        </Modal>
    );
};
