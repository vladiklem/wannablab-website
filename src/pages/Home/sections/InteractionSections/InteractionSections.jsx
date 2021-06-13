import React from "react";
import cx from "classnames";

import { MentorsScrollableList } from "components/styled/MentorsScrollableList/MentorsScrollableList";

import styles from "./InteractionSection.module.scss";

export const InteractionSections = (props) => {
    return (
        <>
            <section
                id="wannablab-teachers"
                className={cx("container pt-3 mb-5", styles.container)}
            >
                <MentorsScrollableList className="mx-n4" {...props} />
            </section>
        </>
    );
};
