import React, { useCallback } from "react";
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
    isPortable,
    onClick,
    ...props
}) => {
    const toCourse = useCallback(() => {
        onClick(props.slug);
    }, [props.slug, onClick]);

    return (
        <ScrollableItem
            className={cx(
                styles.container,
                "shadow-soft pt-3 pb-4 px-4 bg-white rounded-lg scale-item1",
                {
                    "mr-3": index !== array.length - 1,
                    [styles.mobile]: isPortable,
                },
                className,
            )}
            key={key}
            {...props}
        >
            <div className="d-flex align-items-center">
                <p className={cx("mr-3", { "font-small": isPortable })}>{lessonsCount} уроків</p>
                <span
                    className={cx(styles.status, "circle-pulp-animation transition-250 mr-1")}
                ></span>
                <p className={cx({ "font-small": isPortable })}>можна приєднатися</p>
            </div>
            <h3 className="h3 mt-3 mb-2">{title}</h3>
            <div className="row flex-grow-1">
                <div className={cx("col-md-8 col-sm-12", { "d-flex flex-column": isPortable })}>
                    <h4 className={cx("regular", { "mb-4": !isPortable })}>{description}</h4>
                    {isPortable && (
                        <div className="row flex-grow-1">
                            <span className="col-6 d-flex align-items-center">
                                <img className="d-block image" src={src} alt={description} />
                            </span>
                            <span className="col-6 d-flex align-items-center justify-content-center">
                                <p>{`${price} грн`}</p>
                            </span>
                        </div>
                    )}
                </div>
                {!isPortable && (
                    <div className="col-4 d-flex align-items-center justify-content-center">
                        {src && (
                            <img
                                className="d-block ml-auto mr-auto image"
                                src={src}
                                alt={description}
                            />
                        )}
                    </div>
                )}
            </div>
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <Button block size="md" color={buttonColorEnum.WHITE} onClick={toCourse}>
                        Більше
                    </Button>
                </div>
                {!isPortable && (
                    <div className="col-4">
                        <p className="text-center scale-item2">{price} грн</p>
                    </div>
                )}
            </div>
        </ScrollableItem>
    );
};
