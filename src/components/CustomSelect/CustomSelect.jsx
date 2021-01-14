import React, { forwardRef } from "react";
import cx from "classnames";

import styles from "./CustomSelect.module.scss";

export const CustomSelect = forwardRef(({ className, label, options = [], ...props }, ref) => (
    <div className={cx(className, "d-flex flex-column position-relative", styles.selectWrapper)}>
        <select className={styles.select} ref={ref} {...props}>
            {options.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
        <label className={styles.selectLabel}>{label}</label>
    </div>
));
