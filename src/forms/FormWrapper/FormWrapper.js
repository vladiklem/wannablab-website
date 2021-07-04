import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import { objWithId } from "utils/converters";
import { initialUser } from "constants/initialValues";
import { formModeEnum, formSubmitButtonEnum } from "constants/enums";

import styles from "./FormWrapper.module.scss";

export const FormWrapper = ({
    mode = formModeEnum.CREATE,
    initialValue = initialUser,
    isOpen,
    toggle,
    onSubmit,
    children,
    title,
}) => {
    const { reset, register, handleSubmit, errors } = useForm({ defaultValues: initialValue });

    const submitMiddleware = useCallback(
        (data) => {
            onSubmit(objWithId(data, initialValue.id));
            toggle();
        },
        [toggle, onSubmit, initialValue],
    );

    useEffect(() => {
        reset(initialValue);
    }, [reset, initialValue]);

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>{title}</ModalHeader>
            <form onSubmit={handleSubmit(submitMiddleware)}>
                <ModalBody className={styles.modalBody}>
                   {React.cloneElement(children, { register, errors })}
                </ModalBody>
                <ModalFooter>
                    <Button type="submit">{formSubmitButtonEnum[mode]}</Button>
                </ModalFooter>
            </form>
        </Modal>
    );
};
