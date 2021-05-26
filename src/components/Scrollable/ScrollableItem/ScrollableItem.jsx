import React from "react";
import cx from "classnames";

export const ScrollableItem = ({
    className,
    contentClassName,
    children,
    direction = "column",
    ...props
}) => (
    <div className={cx(`text-wrap d-inline-flex flex-shrink-0 flex-${direction}`, className)} {...props}>
        {children}
    </div>
);
