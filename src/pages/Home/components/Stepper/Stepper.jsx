import React from "react";
import cx from "classnames";

import { Button } from "components/Button/Button";

import styles from "./Stepper.module.scss";

export const Stepper = ({ steps }) => (
    <div>
        {steps.map(({ title, titleClassName = "", description, buttonProps }, index) => (
            <div className="d-flex mb-4">
                <div className={cx("col-2", styles.column)}>
                    <h6
                        className={cx("font-weight-bold d-flex position-relative ml-3 mb-0", styles.num)}
                    >
                        {index + 1}
                    </h6>
                </div>
                <div className="col-10 d-flex flex-column">
                    <h2 className={cx("mb-2", styles.stepTitle, titleClassName)}>{title}</h2>
                    {description && <p className="mb-2">{description}</p>}
                    {!!buttonProps && <Button {...buttonProps} />}
                </div>
            </div>
        ))}
    </div>
);
