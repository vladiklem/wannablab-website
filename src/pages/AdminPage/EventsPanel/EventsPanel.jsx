import React, { useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { Button } from "components/index";
import { addEvent, deleteEvent, editEvent } from "store/events/actions";
import { usersToSelectOptions } from "utils/converters";
import { getFormattedCalendarEvents } from "helpers/date";
import { initialEvent } from "constants/initialValues";
import { formModeEnum } from "constants/enums";

import { EventForm } from "./EventForm/EventForm";

const localizer = momentLocalizer(moment);

const submitActions = {
    CREATE: addEvent,
    EDIT: editEvent,
};

export const EventsPanel = () => {
    const dispatch = useDispatch();
    const events = useSelector((store) => store.events.data);
    const users = useSelector((store) => store.users.data);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState(formModeEnum.CREATE);
    const [formInitialValue, setFormInitialValue] = useState(initialEvent);

    const userOptions = useMemo(() => usersToSelectOptions(users), [users]);
    const formattedEvents = useMemo(() => getFormattedCalendarEvents(events), [events]);

    const toggleForm = useCallback(() => setIsFormOpen((isOpen) => !isOpen), [setIsFormOpen]);
    const onAdd = useCallback(() => {
        setFormMode(formModeEnum.CREATE);
        setFormInitialValue(initialEvent);
        toggleForm();
    }, [toggleForm]);
    const onFormSubmit = useCallback((data) => dispatch(submitActions[formMode](data)) , [
        formMode,
        dispatch,
    ]);
    const onDelete = useCallback((id) => dispatch(deleteEvent(id)), [dispatch]);
    const onSelectEvent = useCallback(
        (event) => {
            setFormMode(formModeEnum.EDIT);
            setFormInitialValue(event);
            toggleForm();
        },
        [toggleForm],
    );

    return (
        <div>
            <Button onClick={onAdd}>add event</Button>
            <EventForm
                isOpen={isFormOpen}
                toggle={toggleForm}
                mode={formMode}
                initialValue={formInitialValue}
                onSubmit={onFormSubmit}
                onDelete={onDelete}
                userOptions={userOptions}
            />
            <Calendar
                events={formattedEvents}
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 550 }}
                onSelectEvent={onSelectEvent}
            />
        </div>
    );
};
