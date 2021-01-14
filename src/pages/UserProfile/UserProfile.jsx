import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./UserProfile.scss";

const localizer = momentLocalizer(moment);

export const UserProfile = () => {
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const { fullName } = useSelector((store) => store.user.profile || {});

    const onToggleCalendar = useCallback(() => setIsCalendarVisible((isVisible) => !isVisible), [
        setIsCalendarVisible,
    ]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="avatar__circle"></div>
                </div>
                <div className="col-3">
                    <h1>{fullName}</h1>
                </div>
                <div className="col-3">
                    <Button onClick={onToggleCalendar}>Show calendar</Button>
                </div>
            </div>
            <div className="main-content">
                {isCalendarVisible && (
                    <Calendar
                        events={[{ start: new Date(), end: new Date(), title: "hhhh" }]}
                        localizer={localizer}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }}
                    />
                )}
            </div>
        </div>
    );
};
