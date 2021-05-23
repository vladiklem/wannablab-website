import React, { forwardRef } from "react";
import cx from "classnames";

import styles from "./Radio.module.scss";

export const RadioTypesEnum = {
    DEFAULT: "default",
};

export const Radio = forwardRef(
    (
        {
            className,
            type = RadioTypesEnum.DEFAULT,
            value,
            name,
            id,
            children,
            labelClassName,
            ...props
        },
        ref,
    ) => (
        <div className={cx("position-relative", styles.radio, className)}>
            <input
                className={styles.radio__input}
                name={name}
                value={value}
                id={id || value}
                type="radio"
                ref={ref}
                {...props}
            />
            <label
                className={cx(
                    "position-relative",
                    { [styles.radio__label]: type === RadioTypesEnum.DEFAULT },
                    labelClassName = "mb-0",
                )}
                htmlFor={id || value}
            >
                {children}
            </label>
        </div>
    ),
);
