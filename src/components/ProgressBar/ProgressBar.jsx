import React, { useMemo } from "react";

import cx from "classnames";

export const ProgressBar = ({ progress = 0, steps = 1, className }) => {
    const progressBarWidth = useMemo(() => (progress / steps) * 100 || 5, [steps, progress]);

    return (
        <div className={cx("w-100 border p-1 rounded-xl border-primary-new", className)}>
            <div
                style={{ width: `${progressBarWidth}%`, height: 8 }}
                className="bg-secondary-gradient rounded-xl transition-250"
            />
        </div>
    );
};
