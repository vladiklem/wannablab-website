import React from "react";
import cx from "classnames";

import styles from "./SideBar.module.scss";

export const SideBar = ({ title, isOpen, children }) => {
    return (
        <div className={cx(styles.sidebar, { [styles.isOpen]: isOpen }, "bg-white")}>
            <div>{children}</div>
        </div>
    );
};
