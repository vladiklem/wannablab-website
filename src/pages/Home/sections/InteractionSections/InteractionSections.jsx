import React from "react";
import cx from "classnames";

import { MentorsScrollableList } from "components/styled/MentorsScrollableList/MentorsScrollableList";

import styles from "./InteractionSection.module.scss";

export const InteractionSections = ({ toMentor }) => {
    return (
        <>
            <section
                id="wannablab-teachers"
                className={cx("container pt-3 mb-4", styles.container)}
            >
                <MentorsScrollableList className="mx-n4" toMentor={toMentor} />
            </section>
        </>
    );
};
