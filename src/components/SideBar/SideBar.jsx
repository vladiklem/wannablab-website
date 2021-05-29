import React from "react";
import cx from "classnames";

import styles from "./SideBar.module.scss";

export const SideBar = ({ title, isOpen, children }) => (
    <div className={cx(styles.sidebar, { [styles.isOpen]: isOpen })}>
        <div className={styles.sidebarMenu}>{children}</div>
    </div>
);
