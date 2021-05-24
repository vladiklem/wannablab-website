import React, { useState, useRef, useCallback } from "react";
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
}) => {
    const scrollableContainer = useRef(null);
    const [arrows, setArrows] = useState({ l: false, r: true });

    const setVisibility = useCallback(
        (isRight = true) => {
            const leftIndent = scrollableContainer.current.scrollLeft + (isRight ? 1 : -1) * offset;
            setArrows({
                l: leftIndent >= 10,
                r:
                    10 <
                    scrollableContainer.current.scrollWidth -
                        leftIndent -
                        scrollableContainer.current.clientWidth,
            });
        },
        [offset],
    );

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
        setVisibility(false);
    }, [onScrollLeftTo, offset, setVisibility]);

    const onClickArrowRight = useCallback(() => {
        onScrollLeftTo(offset);
        setVisibility();
    }, [onScrollLeftTo, offset, setVisibility]);

    return (
        <div className={cx("position-relative", styles.scrollable, className)}>
            {hasArrows && (
                <div className="w-25 ml-auto">
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
