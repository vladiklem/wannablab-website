import React, { useMemo } from "react";
import cx from "classnames";

export const ProgressBar = ({ current = 0, goal = 1, redLimit = 25, className }) => {
    const progressBarWidth = useMemo(() => (current / goal) * 100 || 5, [goal, current]);
    const isRed = useMemo(() => progressBarWidth <= redLimit, [progressBarWidth, redLimit]);

    return (
        <div className={cx("w-100 border p-1 rounded-xl border-primary-new", className)}>
            <div
                style={{ width: `${progressBarWidth}%`, height: 8 }}
                className={cx("rounded-xl transition-250", {
                    "bg-action-new": isRed,
                    "bg-secondary-gradient": !isRed,
                })}
            />
        </div>
    );
};
