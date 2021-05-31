import React, { useCallback } from "react";
import cx from "classnames";

import { Collapse, Button } from "components/index";

import styles from "./LeadItem.module.scss";

export const LeadItem = ({ id, status, name, phoneNumber, onUpdate, isPortable }) => {
    const handleUpdate = useCallback(() => onUpdate({ id, status: "touched", name, phoneNumber }), [
        id,
        name,
        phoneNumber,
        onUpdate,
    ]);

    return (
        <Collapse
            className={cx("border rounded mb-3 px-4 position-relative", styles.container, {
                [styles.isNew]: status === "new",
            })}
            togglerContent={
                <div className="text-left">
                    <span className="font-weight-semibold">Ім'я: </span> {name}
                    <br />
                    <span className="font-weight-semibold">Номер телефону: </span> {phoneNumber}
                </div>
            }
            contentClassName="d-flex align-items-center justify-content-between row pb-4 pt-2"
        >
            <span className="col-6">
                <Button
                    className="rounded-lg text-highlighted font-weight-semibold"
                    color="purple-soft"
                    onClick={handleUpdate}
                >
                    {isPortable ? "набрала" : "Набрала та додала в таблицю"}
                </Button>
            </span>
            <span className="col-6">
                <Button color="red">Видалити</Button>
            </span>
        </Collapse>
    );
};