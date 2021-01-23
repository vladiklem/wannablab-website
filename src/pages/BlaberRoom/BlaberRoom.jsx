import React from "react";
import { useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import cx from "classnames";
import moment from "moment";

import { selectGroupByUserId } from "selectors/blaber";
import { images } from "constants/images";

import styles from "./BlaberRoom.module.scss";

const localizer = momentLocalizer(moment);

export const BlaberRoom = () => {
    const user = useSelector((state) => state.user);
    const group = useSelector(selectGroupByUserId("ASnCWU2JbEGrdy0OJnVg"));

    return (
        <div className={styles.container}>
            <div className={cx("position-relative", styles.topPanel)}>
                <p>{group.title}</p>
                <div className={styles.avatarWrapper}>
                    <img className={styles.avatar} src={images.uramen12} alt="Avatar" />
                    <h1>Sofia</h1>
                </div>
            </div>
            <div className={styles.bottomPanel}>
                <div className="bg-white h-100">
                    <Calendar
                        events={[]}
                        localizer={localizer}
                        startAccessor="start"
                        endAccessor="end"
                    />
                </div>
            </div>
        </div>
    );
};
