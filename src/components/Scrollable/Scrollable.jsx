import React, { useRef, useCallback, useMemo } from "react";
import cx from "classnames";
import { ArrowRightLong } from "components/Icons/ArrowRightLong";

import { Button } from "components/index";

import styles from "./Scrollable.module.scss";

export const Scrollable = ({
    className,
    hasArrows = false,
    isScrollHidden = false,
    isScrollbarVisible = true,
    offset = 145,
    children,
    containerClassName = "",
    components,
}) => {
    const scrollableContainer = useRef(null);
    const Header = useMemo(() => (components && components.Header ? components.Header : null), [
        components,
    ]);

    const onScrollLeftTo = useCallback((offset) => {
        return (
            scrollableContainer.current &&
            (() => {
                scrollableContainer.current.scrollLeft += offset;
            })()
        );
    }, []);

    const onClickArrowLeft = useCallback(() => {
        onScrollLeftTo(-offset);
    }, [onScrollLeftTo, offset]);

    const onClickArrowRight = useCallback(() => {
        onScrollLeftTo(offset);
    }, [onScrollLeftTo, offset]);

    return (
        <div className={cx("position-relative", styles.scrollable, className)}>
            {hasArrows && (
                <div
                    className={cx("d-flex align-items-center", {
                        "justify-content-between": !!Header,
                        "justify-content-end": !Header,
                    })}
                >
                    {!!Header && <span>{Header}</span>}
                    <div className="w-25">
                        <Button
                            color="unstyled"
                            onClick={onClickArrowLeft}
                            className={cx(styles.arrow, styles.left, "p-0 mr-3")}
                        >
                            <ArrowRightLong width={20} height={20} />
                        </Button>
                        <Button
                            color="unstyled"
                            onClick={onClickArrowRight}
                            className={cx(styles.arrow, "p-0")}
                        >
                            <ArrowRightLong className="shadow-soft" width={20} height={20} />
                        </Button>
                    </div>
                </div>
            )}
            <div
                ref={scrollableContainer}
                className={cx(
                    "p-4",
                    {
                        "overflow-hidden": isScrollHidden,
                        [styles.containerScrollbarInvisible]: !isScrollbarVisible,
                    },
                    styles.container,
                    containerClassName,
                )}
            >
                {children}
            </div>
        </div>
    );
};
