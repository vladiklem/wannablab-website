import React from "react";
import cx from "classnames";

import styles from "./TopBar.module.scss";

export const TopBar = ({ className, isVisible = true, children }) => {
    return (
        <nav
            className={cx(
                styles.topBar,
                "px-5 flex-row-reverse justify-content-between align-items-center",
                {
                    "d-flex": isVisible,
                    "d-none": !isVisible,
                },
                className,
            )}
        >
            {children}
        </nav>
    );
};
