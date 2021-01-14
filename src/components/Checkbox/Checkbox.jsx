import React, { forwardRef } from "react";
import cx from "classnames";

export const Checkbox = forwardRef(
    ({ className, name, id, label, labelClassName, ...props }, ref) => (
        <div className={cx("d-flex", className)}>
            <input
                type="checkbox"
                name={name}
                id={id || name}
                className="mt-1"
                ref={ref}
                {...props}
            />
            <label className={cx("pl-2", labelClassName)} htmlFor={id || name}>
                {label}
            </label>
        </div>
    ),
);
