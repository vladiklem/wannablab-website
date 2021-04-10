import React, { useRef, useCallback } from "react";
import cx from "classnames";
import { ArrowRight } from "components/Icons/ArrowRight";

import { Button } from "components/index";

import styles from "./Scrollable.module.scss";

export const Scrollable = ({ className, offset = 145, children }) => {
    const scrollableContainer = useRef(null);

    const onScrollLeftTo = useCallback((offset) => {
        scrollableContainer.current &&
            (() => {
                scrollableContainer.current.scrollLeft += offset;
            })();
    }, []);

    const onClickArrowLeft = useCallback(() => {
        onScrollLeftTo(-offset);
    }, [onScrollLeftTo, offset]);

    const onClickArrowRight = useCallback(() => {
        onScrollLeftTo(offset);
    }, [onScrollLeftTo, offset]);

    return (
        <div className={cx("position-relative", styles.scrollable, className)}>
            <div ref={scrollableContainer} className={cx("p-3_5", styles.container)}>
                {children}
            </div>
            <Button
                color="unstyled"
                onClick={onClickArrowLeft}
                className={cx(styles.arrow, styles.left)}
                isSquare={true}
            >
                <ArrowRight width={20} height={20} />
            </Button>
            <Button
                color="unstyled"
                onClick={onClickArrowRight}
                className={cx(styles.arrow, styles.right)}
                isSquare={true}
            >
                <ArrowRight width={20} height={20} />
            </Button>
        </div>
    );
};
