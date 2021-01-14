import React, { useState, useCallback } from "react";
import { Collapse as ReactstrapCollapse } from "reactstrap";
import cx from "classnames";

import { Button, buttonColorEnum } from "components/Button/Button";
import { ArrowDownFill } from "components/Icons/ArrowDownFill";

import styles from "./Collapse.module.scss";

export const Collapse = ({ className, togglerContent, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), [setIsOpen]);

    return (
        <div className={cx("border rounded", className)}>
            <Button
                className="px-3"
                color={buttonColorEnum.UNSTYLED}
                size="lg"
                block={true}
                isSquare={true}
                onClick={toggle}
            >
                <div className="d-flex align-items-center justify-content-between">
                    {togglerContent}
                    <span className={cx("mr-3", styles.arrow, { [styles.rotated]: isOpen })}>
                        <ArrowDownFill width={32} height={32} />
                    </span>
                </div>
            </Button>
            <ReactstrapCollapse isOpen={isOpen}>
                <div className="p-3">{children}</div>
            </ReactstrapCollapse>
        </div>
    );
};
