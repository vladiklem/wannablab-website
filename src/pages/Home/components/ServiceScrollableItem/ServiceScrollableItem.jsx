import React from "react";
import cx from "classnames";

import { ScrollableItem, Button, buttonColorEnum } from "components/index";

import styles from "./ServiceScrollableItem.module.scss";

export const ServiceScrollableItem = ({
    index,
    array,
    src,
    description = "",
    title,
    key,
    lessonsCount,
    price = "300",
    className,
    ...props
}) => {
    return (
        <ScrollableItem
            className={cx(
                styles.container,
                "shadow-soft pt-3 pb-4 px-4 bg-white rounded-lg scale-item1",
                {
                    "mr-3": index !== array.length - 1,
                },
                className,
            )}
            key={key}
            {...props}
        >
            <div className="d-flex align-items-center">
                <p className="mr-3">{lessonsCount} уроків</p>
                <span
                    className={cx(styles.status, "circle-pulp-animation transition-250 mr-1")}
                ></span>
                <p>можна приєднатися</p>
            </div>
            <h3 className="h3 mt-3 mb-2">{title}</h3>
            <div className="row flex-grow-1">
                <div className="col-8">
                    <h4 className="regular mb-4">{description}</h4>
                </div>
                <div className="col-4">
                    {src && (
                        <img
                            className="d-block ml-auto mr-auto image"
                            src={src}
                            alt={description}
                        />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <Button block size="md" color={buttonColorEnum.WHITE}>
                        Більше
                    </Button>
                </div>
                <div className="col-4">
                    <p className="text-center scale-item2">{price} грн</p>
                </div>
            </div>
        </ScrollableItem>
    );
};
