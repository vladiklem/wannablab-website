import React, { useCallback } from "react";
import cx from "classnames";

import { ScrollableItem, Button, buttonColorEnum, List } from "components/index";

import styles from "./ServiceScrollableItem.module.scss";

export const ServiceScrollableItem = ({
    index,
    array,
    src,
    list,
    priceList,
    title,
    lessonsCount,
    status,
    price = "300",
    className,
    isPortable,
    description,
    onClick,
    slug,
}) => {
    const toCourse = useCallback(() => {
        onClick(slug);
    }, [slug, onClick]);

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
        >
            <div className="d-flex align-items-center">
                <p className={cx("mr-3", { "font-small": isPortable })}>{lessonsCount} уроків</p>
                <span
                    className={cx(
                        styles.status,
                        `circle-pulp-animation ${status.id} transition-250 mr-1`,
                    )}
                ></span>
                <p className={cx({ "font-small": isPortable })}>
                    {cx({
                        "можна приєднатися": status.id === "ongoing",
                        [`початок ${status.date}`]: status.id === "start-soon",
                    })}
                </p>
            </div>
            <h3 className="h3 mt-3 mb-2">{title}</h3>
            <div className="row flex-grow-1 mb-2">
                <div className={cx("col-md-8 col-sm-12", { "d-flex flex-column": isPortable })}>
                    <List className="mb-2" type="features-white" list={list} />
                    {isPortable && (
                        <div className="row flex-grow-1">
                            <div className="col-12 font-weight-semibold text-right">
                                {price} грн
                            </div>
                            <div className="col-12 d-flex align-items-center">
                                <img
                                    className={cx("d-block", styles.image__mobile)}
                                    src={src}
                                    alt=""
                                />
                            </div>
                        </div>
                    )}
                </div>
                {!isPortable && (
                    <div className="col-4 d-flex align-items-center justify-content-center">
                        {src && <img className="d-block ml-auto mr-auto image" src={src} alt="" />}
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
                    <div className="col-4 d-flex align-items-center justify-content-center">
                        <p className="text-center scale-item2">{price} грн</p>
                    </div>
                )}
            </div>
        </ScrollableItem>
    );
};
