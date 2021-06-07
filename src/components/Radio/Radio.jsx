import React, { forwardRef } from "react";
import cx from "classnames";

import styles from "./Radio.module.scss";
import { Check } from "components/Icons/Check";

export const radioTypesEnum = {
    DEFAULT: "default",
    BORDERED: "bordered",
};

export const Radio = forwardRef(
    (
        {
            className,
            type = radioTypesEnum.BORDERED,
            value,
            name,
            id,
            children,
            labelClassName,
            ...props
        },
        ref,
    ) => (
        <div className={cx("position-relative transition-250", styles.radio, className)}>
            <input
                className={styles.radio__input}
                name={name}
                value={value}
                id={id || value}
                type="radio"
                ref={ref}
                {...props}
            />
            <Check
                fill="#fff"
                height={12}
                width={12}
                className={cx("transition-250", styles.radio__check)}
            />
            <label
                className={cx(
                    "position-relative transition-250 border rounded-lg w-100 mb-3 font-weight-bold regular",
                    {
                        [styles.radio__defaultLabel]: type === radioTypesEnum.DEFAULT,
                        [cx(styles.radio__borderedLabel, "border")]:
                            type === radioTypesEnum.BORDERED,
                    },
                    labelClassName,
                )}
                htmlFor={id || value}
            >
                {children}
            </label>
        </div>
    ),
);
