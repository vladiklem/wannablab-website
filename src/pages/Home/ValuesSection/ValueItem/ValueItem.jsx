import React from "react";
import cx from "classnames";

export const ValueItem = ({ title, icon, description, className, isPortable, index }) => (
    <div
        className={cx("border rounded-xl px-4 py-3", className, {
            [`w-75 ml-${index + 2}`]: !isPortable,
        })}
    >
        <div className="d-flex align-items-center mb-2">
            <span className="mr-3">{icon}</span>
            <h3 className="h3">{title}</h3>
        </div>
        <h4 className="regular">{description}</h4>
    </div>
);
