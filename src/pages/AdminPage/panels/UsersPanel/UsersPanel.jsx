import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "components/index";
import { addUser, deleteUser, editUser } from "store/users/actions";
import { initialUser } from "constants/initialValues";
import { formModeEnum } from "constants/enums";

import { UserItem } from "./components/UserItem/UserItem";
import { UserForm } from "./components/UserForm/UserForm";

const submitActions = {
    CREATE: addUser,
    EDIT: editUser,
};

export const UsersPanel = () => {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.users.data);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState(formModeEnum.CREATE);
    const [userFormInitialValue, setFormInitialValue] = useState(initialUser);

    const toggleForm = useCallback(() => setIsFormOpen((isOpen) => !isOpen), [setIsFormOpen]);
    const onAdd = useCallback(() => {
        setFormMode(formModeEnum.CREATE);
        setFormInitialValue(initialUser);
        toggleForm();
    }, [toggleForm]);
    const onFormSumit = useCallback(
        (data) => dispatch(submitActions[formMode](data)),
        [formMode, dispatch],
    );
    const onDelete = useCallback((id) => dispatch(deleteUser(id)), [dispatch]);
    const onEdit = useCallback(
        (user) => {
            setFormMode(formModeEnum.EDIT);
            setFormInitialValue(user);
            toggleForm();
        },
        [toggleForm],
    );

    return (
        <div>
            <Button onClick={onAdd}>add user</Button>
            <UserForm
                mode={formMode}
                isOpen={isFormOpen}
                toggle={toggleForm}
                onSubmit={onFormSumit}
                initialValue={userFormInitialValue}
            />
            {users.map((user) => (
                <UserItem
                    key={user.id || user.username}
                    user={user}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
};
