import React from "react";
import cx from "classnames";

import { ScrollableItem } from "../ScrollableItem/ScrollableItem";

import styles from "./ScrollableItemShadow.module.scss";

export const ScrollableItemShadow = ({
    isPortable,
    index,
    array,
    className,
    children,
    ...props
}) => (
    <ScrollableItem
        className={cx(
            "shadow-soft rounded-xl bg-white-exp transition-250 p-3",
            { [styles.isPortable]: isPortable },
            { "mr-4": array.length - 1 !== index },
            styles.container,
            className,
        )}
        {...props}
    >
        {children}
    </ScrollableItem>
);
