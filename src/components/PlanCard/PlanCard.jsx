import React from "react";
import cx from "classnames";

import { Check } from "components/Icons/Check";
import { Button, buttonColorEnum } from "components/index";

import styles from "./PlanCard.module.scss";

export const planTypeEnum = {
    BASIC: "basic",
    PRO: "pro",
    ALL_FEATURED: "allFeatured",
};

export const PlanCard = ({
    type = planTypeEnum.BASIC,
    icon,
    title,
    buttonLabel,
    currency = "грн",
    price,
    per = "місяць",
    description,
    featuresList = [],
    className,
    onClick,
}) => (
    <div
        className={cx(
            "d-flex flex-column align-items-center rounded position-relative",
            styles.container,
            className,
        )}
    >
        <div className={styles.iconContainer}>{icon}</div>
        <span className={cx("w-50 text-center rounded bg-white", styles.title, styles[type])}>
            {title}
        </span>
        <div
            className={cx(
                "d-flex flex-column align-items-center w-100 h-100 position-relative pb-4 px-4",
                styles.cover,
                styles[type],
            )}
        >
            <div className="d-flex align-items-end mt-4 mb-3">
                <span className="mr-1">{currency}</span>
                <span className={styles.price}>{price}</span>
                <span>{`/${per}`}</span>
            </div>
            {!!description && <div className="mb-3 px-2 text-center">{description}</div>}
            <div className="w-100 mb-4">
                {featuresList.map((featureLabel, index) => (
                    <div
                        className={cx({
                            "mb-3": index !== featuresList.length - 1,
                        })}
                        key={featureLabel}
                    >
                        <Check className="mr-2" fill="#fff" />
                        {featureLabel}
                    </div>
                ))}
            </div>
            <Button
                tag="a"
                href="#lead-form"
                className="mt-auto"
                color={buttonColorEnum.WHITE}
                onClick={onClick}
                isBold
            >
                {buttonLabel}
            </Button>
        </div>
    </div>
);
