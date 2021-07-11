import React, { useCallback } from "react";
import cx from "classnames";
import { Button } from "components/index";
import { fireAnalyticsEvent } from "analytics/";

const bannerFields = [
    {
        label: "Старт",
        value: "20 липня",
    },
    {
        label: "Тривалість",
        value: "2 місяці",
    },
    {
        label: "Час",
        value: "вівторок i четверг 18:15–19:15",
    },
    {
        label: "Вартість",
        value: "4 770 грн або 5540 ( 2 платежі по 2770 грн)",
    },
];

export const GeneralInfoBanner = ({ className, isPortable }) => {
    const onClick = useCallback(() => {
        fireAnalyticsEvent({
            category: "IT",
            action: "clicked Sign Up Course",
        });
        setTimeout(() => document.querySelector("#name").focus(), 750);
    }, []);

    return (
        <div
            className={cx("h3 font-weight-normal border p-4 rounded-lg border-width-2", className)}
        >
            {bannerFields.map(({ label, value }, index, array) => (
                <div className={cx({ "mb-3": index + 1 !== array.length })}>
                    <span className="mr-1">{label}:</span>
                    <span>{value}</span>
                </div>
            ))}
            <Button
                href={`#wannablab-it-course-registration${isPortable ? "" : "-inner-container"}`}
                color="green-soft"
                className="mt-4 py-3 h3 font-weight-bold rounded-xl"
                onClick={onClick}
                block
            >
                Записатися ⬇️
            </Button>
        </div>
    );
};
