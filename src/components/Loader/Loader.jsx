import React from "react";
import cx from "classnames";

import styles from "./Loader.module.scss";

export const Loader = ({ color = "" }) => (
    <div
        className={cx(
            "position-relative d-flex justify-content-center align-items-center",
            styles.loaderContainer,
            { [styles.softPurple]: color === "purple-soft" },
        )}
    >
        <div className={styles.loader}></div>
    </div>
);
