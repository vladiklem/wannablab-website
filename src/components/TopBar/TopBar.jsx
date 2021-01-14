import React from "react";
import cx from "classnames";

import styles from "./TopBar.module.scss";

export const TopBar = ({ className, children }) => {
    return <div className={cx(styles.topBar, className)}>{children}</div>;
};
