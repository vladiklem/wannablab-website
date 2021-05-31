import React from "react";
import cx from "classnames";

import { Button, buttonColorEnum } from "components/index";
import { CloseSm } from "components/Icons/CloseSm";

import styles from "./TestTimeItem.module.scss";

export const TestTimeItem = ({ label, isBooked, className }) => {
    return (
        <div
            className={cx(
                "d-flex align-items-center",
                styles.container,
                {
                    [styles.isBooked]: isBooked,
                },
                className,
            )}
        >
            <span>{label}</span>
            <Button
                color={buttonColorEnum.UNSTYLED}
                className={cx(styles.button, "ml-2", {
                    [styles.isBooked]: isBooked,
                })}
                onClick={() => console.log("clicked")}
            >
                <CloseSm width={24} height={24} className={styles.close} />
            </Button>
        </div>
    );
};
