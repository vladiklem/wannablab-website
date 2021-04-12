import React from "react";
import cx from "classnames";

import { Button } from "components/index";

import styles from "../Scrollable.module.scss";

export const ScrollableItem = ({ className, contentClassName, action, children, ...props }) => (
    <div className={cx(styles.item, className)} {...props}>
        <div className={contentClassName}>{children}</div>
        {!!action && <Button {...action} />}
    </div>
);
