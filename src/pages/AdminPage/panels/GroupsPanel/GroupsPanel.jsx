import React, { useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "components/index";
import { addGroup, editGroup } from "store/groups/actions";
import { usersToSelectOptions } from "utils/converters";
import { initialGroup } from "constants/initialValues";
import { formModeEnum } from "constants/enums";

import { GroupsList } from "./components/GroupsList/GroupsList";
import { GroupForm } from "./components/GroupForm/GroupForm";

const submitActions = {
    CREATE: addGroup,
    EDIT: editGroup,
};

export const GroupsPanel = () => {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.users.data);
    const groups = useSelector((store) => store.groups.data);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState(formModeEnum.CREATE);
    const [formInitialValue, setFormInitialValue] = useState(initialGroup);

    const userOptions = useMemo(() => usersToSelectOptions(users), [users]);

    const toggleForm = useCallback(() => setIsFormOpen((isOpen) => !isOpen), [setIsFormOpen]);
    const onAdd = useCallback(() => {
        setFormMode(formModeEnum.CREATE);
        setFormInitialValue(initialGroup);
        toggleForm();
    }, [toggleForm]);
    const onFormSubmit = useCallback((data) => dispatch(submitActions[formMode](data)) , [
        formMode,
        dispatch,
    ]);

    return (
        <div>
            <Button onClick={onAdd}>add group</Button>
            <GroupsList groups={groups} />
            <GroupForm
                isOpen={isFormOpen}
                toggle={toggleForm}
                mode={formMode}
                initialValue={formInitialValue}
                onSubmit={onFormSubmit}
                userOptions={userOptions}
            />
        </div>
    );
};
