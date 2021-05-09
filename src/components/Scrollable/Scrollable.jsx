import React, { useState, useRef, useCallback } from "react";
import cx from "classnames";
import { ArrowRight } from "components/Icons/ArrowRight";

import { Button } from "components/index";

import styles from "./Scrollable.module.scss";

export const Scrollable = ({ className, withArrows = false, offset = 145, children }) => {
    const scrollableContainer = useRef(null);
    const [arrows, setArrows] = useState({ l: false, r: true });

    const setVisibility = useCallback((isRight = true) => {
        const leftIndent = scrollableContainer.current.scrollLeft + (isRight ? 1 : -1) * offset;
        setArrows({
            l: (leftIndent >= 10),
            r: (
                10 <
                scrollableContainer.current.scrollWidth -
                    leftIndent -
                    scrollableContainer.current.clientWidth
            ),
        });
    }, [offset]);

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
            <div ref={scrollableContainer} className={cx("pt-3_5 pb-5 px-4_5", styles.container)}>
                {children}
            </div>
            {withArrows && arrows.l && (
                <Button
                    color="unstyled"
                    onClick={onClickArrowLeft}
                    className={cx(styles.arrow, styles.left)}
                    isSquare={true}
                >
                    <ArrowRight width={20} height={20} />
                </Button>
            )}
            {withArrows && arrows.r && (
                <Button
                    color="unstyled"
                    onClick={onClickArrowRight}
                    className={cx(styles.arrow, styles.right)}
                    isSquare={true}
                >
                    <ArrowRight width={20} height={20} />
                </Button>
            )}
        </div>
    );
};
