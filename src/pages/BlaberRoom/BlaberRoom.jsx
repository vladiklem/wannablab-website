import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import cx from "classnames";
import moment from "moment";

import { selectGroupByUserId, selectEventsByGroupId } from "selectors/blaber";
import { getFormattedCalendarEvents } from "helpers/date";
import { images } from "constants/images";

import styles from "./BlaberRoom.module.scss";

const localizer = momentLocalizer(moment);

export const BlaberRoom = () => {
    const blaber = useSelector((state) => state.currentUser);
    const group = useSelector(selectGroupByUserId(blaber.profile.id));
    const events = useSelector(selectEventsByGroupId(group.id));
    const formattedEvents = useMemo(() => getFormattedCalendarEvents(events), [events]);

    return (
        <div className={styles.container}>
            <div className={cx("position-relative", styles.topPanel)}>
                <p>{group.title}</p>
                <div className={styles.avatarWrapper}>
                    <img className={styles.avatar} src={images.uramen12} alt="Avatar" />
                    <h1>{blaber.profile.fullName}</h1>
                </div>
            </div>
            <div className={styles.bottomPanel}>
                <div className="bg-white h-100">
                    <Calendar
                        events={formattedEvents}
                        localizer={localizer}
                        startAccessor="start"
                        endAccessor="end"
                    />
                </div>
            </div>
        </div>
    );
};
