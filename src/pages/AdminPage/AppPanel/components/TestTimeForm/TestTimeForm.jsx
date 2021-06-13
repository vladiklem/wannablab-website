import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useForm } from "react-hook-form";

import { Input, Button, CustomSelect } from "components/index";
import { mentorOptions } from "constants/options";

export const TestTimeForm = ({ isOpen, toggle, onSubmit }) => {
    const { handleSubmit, register, errors } = useForm();

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Дата/Час тестового</ModalHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                    <Input
                        label="Початок"
                        name="dateTime"
                        type="datetime-local"
                        ref={register({ required: true })}
                        errorMessage={errors.dateTime && "Дата/час обов'язкові"}
                    />
                    <CustomSelect
                        label="Ментор"
                        name="mentor"
                        options={mentorOptions}
                        ref={register}
                    />
                    <Input
                        label="Опис"
                        name="description"
                        ref={register({ maxLength: 500 })}
                        tag="textarea"
                        errorMessage={errors.description && "Максимальна довжина - 500 символів"}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button type="submit">Додати</Button>
                </ModalFooter>
            </form>
        </Modal>
    );
};
