import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import { Button } from "components/index";
import { addTest } from "store/general/actions";
import { getTestTimeLabel } from "helpers/date";

import { TestTimeForm } from "./components/TestTimeForm/TestTimeForm";
import { TestTimeItem } from "./components/TestTimeItem/TestTimeItem";

import styles from "./GeneralPanel.module.scss";

export const GeneralPanel = () => {
    const dispatch = useDispatch();
    const testTime = useSelector((state) => state.general.testTime);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = useCallback(() => setIsFormOpen((isOpen) => !isOpen), [setIsFormOpen]);

    const onSubmit = useCallback(
        (data) => {
            dispatch(addTest(data));
            toggleForm();
        },
        [dispatch, toggleForm],
    );

    return (
        <div>
            <Button onClick={toggleForm}>Додати час тестового</Button>
            <TestTimeForm isOpen={isFormOpen} toggle={toggleForm} onSubmit={onSubmit} />
            <div className={cx("d-flex align-items-center flex-wrap mt-4", styles.testTimeList)}>
                {testTime.map(({ dateTime, ...testTimeItem }) => (
                    <TestTimeItem
                        label={getTestTimeLabel(dateTime)}
                        className="ml-3 mb-3"
                        key={testTimeItem.id}
                        {...testTimeItem}
                    />
                ))}
            </div>
        </div>
    );
};
