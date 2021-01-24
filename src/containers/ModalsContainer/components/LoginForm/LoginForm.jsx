import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Modal, ModalFooter } from "reactstrap";

import { Input, Button } from "components/index";
import { authAsAdmin } from "store/general/actions";
import { authUser } from "store/currentUser/actions";
import { adminPasswordCheck } from "utils/password";

export const LoginForm = ({ isOpen, toggle }) => {
    const dispatch = useDispatch();
    const blabers = useSelector((state) => state.users.data);
    const history = useHistory();
    const { handleSubmit, register } = useForm();

    const toAdmin = useCallback(() => {
        dispatch(authAsAdmin());
        history.push("/admin");
        toggle();
    }, [dispatch, history, toggle]);

    const toBlaberRoom = useCallback(
        (username) => {
            dispatch(authUser({ login: username }));
            history.push(`/profile`);
            toggle();
        },
        [dispatch, history, toggle],
    );

    const userCredentialsCheck = useCallback(
        (login) => {
            const blaber = blabers.find(({ username }) => username === login);
            blaber && toBlaberRoom(blaber.username);
        },
        [blabers, toBlaberRoom],
    );

    const onSubmit = useCallback(
        (data) => {
            adminPasswordCheck(data) ? toAdmin() : userCredentialsCheck(data.login);
        },
        [toAdmin, userCredentialsCheck],
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
