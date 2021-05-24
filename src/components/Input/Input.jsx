import React, { forwardRef } from "react";
import cx from "classnames";
import styles from "./Input.module.scss";

export const Input = forwardRef(
    (
        {
            className,
            labelClassName,
            tag: Tag = "input",
            label,
            id,
            name,
            invalid,
            errorMessage,
            alternative = false,
            ...props
        },
        ref,
    ) => {
        return alternative ? (
            <div>
                <Tag
                    className={cx(styles.alternativeInput, className)}
                    id={id || name}
                    name={name}
                    {...props}
                />
            </div>
        ) : (
            <div className={cx(className, styles.customFormGroup)}>
                <Tag
                    id={id || name}
                    name={name}
                    placeholder={label}
                    ref={ref}
                    className={cx(styles.customFormInput, {
                        [styles.invalid]: invalid || errorMessage,
                        [styles.textarea]: Tag === "textarea",
                    })}
                    {...props}
                />
                {!!label && (
                    <label
                        className={cx(styles.customFormLabel, labelClassName)}
                        htmlFor={id || name}
                    >
                        {label}
                    </label>
                )}
                <span className={styles.customErrorMessage}>{errorMessage}</span>
            </div>
        );
    },
);
