import React from "react";
import cx from "classnames";

import styles from "./SideBar.module.scss";

export const SideBar = ({ title, isOpen, children }) => (
    <div className={cx(styles.sidebar, { [styles.isOpen]: isOpen })}>
        {title && (
            <div
                className={cx(
                    "d-flex justify-content-center align-items-center",
                    styles.sidebarHeader,
                )}
            >
                <h3>{title}</h3>
            </div>
        )}
        <div className={styles.sidebarMenu}>{children}</div>
    </div>
);
