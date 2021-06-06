import React from "react";
import Fade from "react-reveal/Fade";
import cx from "classnames";

import { MentorsScrollableList } from "components/styled/MentorsScrollableList/MentorsScrollableList";

import styles from "./InteractionSection.module.scss";

export const InteractionSections = ({ toMentor }) => {
    return (
        <>
            <section
                id="wannablab-teachers"
                className={cx("container pt-3 mb-5", styles.container)}
            >
                <MentorsScrollableList toMentor={toMentor} />
            </section>
        </>
    );
};
