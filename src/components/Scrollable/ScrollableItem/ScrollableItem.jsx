import React from "react";
import cx from "classnames";

import styles from "../Scrollable.module.scss";

export const ScrollableItem = ({ className, children }) => (
    <div className={cx(styles.item, className)}>{children}</div>
);
