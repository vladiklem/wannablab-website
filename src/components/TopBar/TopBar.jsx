import React from "react";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";

import { mediaBreakpointsEnum } from "constants/enums";

import styles from "./TopBar.module.scss";

export const TopBar = ({ className, isVisible = true, children }) => {
    const isMobileView = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    return (
        <nav
            className={cx(
                styles.topBar,
                "px-5 flex-row-reverse justify-content-between align-items-center",
                {
                    "d-flex": isVisible,
                    "d-none": !isVisible,
                },
                className,
            )}
        >
            {children}
        </nav>
    );
};
