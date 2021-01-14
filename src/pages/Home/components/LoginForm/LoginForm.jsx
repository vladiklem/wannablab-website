import React from "react";
import { useForm } from "react-hook-form";
import { Modal, ModalFooter } from "reactstrap";

import { Input, Button } from "components/index";

export const LoginForm = ({ isOpen, toggle, onSubmit }) => {
    const { handleSubmit, register } = useForm();

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
