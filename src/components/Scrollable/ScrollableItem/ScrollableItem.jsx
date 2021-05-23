import React from "react";
import cx from "classnames";

export const ScrollableItem = ({
    className,
    contentClassName,
    children,
    direction = "column",
    ...props
}) => (
    <div className={cx(`white-space-normal d-inline-flex flex-${direction}`, className)} {...props}>
        {children}
    </div>
);
