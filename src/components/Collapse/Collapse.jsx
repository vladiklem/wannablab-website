import React, { useState, useCallback } from "react";
import { Collapse as ReactstrapCollapse } from "reactstrap";
import cx from "classnames";

import { Button, buttonColorEnum } from "components/Button/Button";
import { ArrowDownFill } from "components/Icons/ArrowDownFill";

import styles from "./Collapse.module.scss";

export const Collapse = ({
    className = "",
    togglerContent = "Toggle",
    contentClassName = "p-3",
    togglerClassName = "",
    withArrow = false,
    arrowClassName = "",
    onToggle,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = useCallback(() => {
        onToggle && onToggle();
        setIsOpen((isOpen) => !isOpen);
    }, [onToggle, setIsOpen]);

    return (
        <div className={className}>
            <Button
                className={togglerClassName}
                color={buttonColorEnum.UNSTYLED}
                size="lg"
                block={true}
                isSquare={true}
                onClick={toggle}
            >
                <div
                    className={cx({
                        "d-flex align-items-center justify-content-between": withArrow,
                    })}
                >
                    {togglerContent}
                    {withArrow && (
                        <span
                            className={cx("mr-3", styles.arrow, arrowClassName, {
                                [styles.rotated]: isOpen,
                            })}
                        >
                            <ArrowDownFill width={32} height={32} />
                        </span>
                    )}
                </div>
            </Button>
            <ReactstrapCollapse isOpen={isOpen}>
                <div className={contentClassName}>{children}</div>
            </ReactstrapCollapse>
        </div>
    );
};
