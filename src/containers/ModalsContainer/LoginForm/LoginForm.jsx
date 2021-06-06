import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Modal, ModalFooter } from "reactstrap";

import { Input, Button } from "components/index";
import { appAdminAuth } from "store/app/actions";
import { adminPasswordCheck } from "utils/password";

export const LoginForm = ({ isOpen, toggle }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { handleSubmit, register } = useForm();

    const toAdmin = useCallback(() => {
        dispatch(appAdminAuth());
        history.push("/admin");
        toggle();
    }, [dispatch, history, toggle]);

    const onSubmit = useCallback(
        (data) => {
            adminPasswordCheck(data) && toAdmin();
        },
        [toAdmin],
    );

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="px-5 py-4">
                    <Input name="login" label="Логін" ref={register({ required: true })} />
                    <Input
                        name="password"
                        label="Пароль"
                        type="password"
                        ref={register({ required: true })}
                    />
                </div>
                <ModalFooter>
                    <Button type="submit">Завалитись в адмінку</Button>
                </ModalFooter>
            </form>
        </Modal>
    );
};
