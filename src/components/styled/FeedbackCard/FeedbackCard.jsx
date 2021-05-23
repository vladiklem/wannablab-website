import React from "react";
import cx from "classnames";

import { QuoteUpIcon } from "components/Icons/QuoteUpIcon";

import styles from "./FeedbackCard.module.scss";

export const FeedbackCard = ({ className, avatar, alt, description }) => (
    <div
        className={cx(
            styles.feedback,
            "position-relative rounded-xl px-4 pt-3 pb-4 shadow bg-white",
            className,
        )}
    >
        <QuoteUpIcon
            width={24}
            height={24}
            className={cx(styles.feedback__quote_icon, "text-gray-900")}
        />
        <h3 className={cx(styles.feedback__title, "h3 mb-2 pl-6")}>Sofia</h3>
        <div className="d-flex">
            <img className={cx(styles.feedback__avatar, "rounded-xl")} src={avatar} alt={alt} />
            <p className="pl-3 mb-0 font-small">{description}</p>
        </div>
    </div>
);
