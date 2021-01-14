import React, { forwardRef } from "react";
import cx from "classnames";

import styles from "./Radio.module.scss";

export const Radio = forwardRef(({ className, name, id, label, labelClassName, ...props }, ref) => (
    <div className={cx("position-relative", styles.radioContainer, className)}>
        <input
            className={styles.radio}
            name={name}
            id={id || name}
            type="radio"
            ref={ref}
            {...props}
        />
        <label
            className={cx("position-relative", styles.radioLabel, labelClassName)}
            htmlFor={id || name}
        >
            {label}
        </label>
    </div>
));
