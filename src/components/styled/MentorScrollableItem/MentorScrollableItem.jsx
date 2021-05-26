import React, { useCallback } from "react";
import cx from "classnames";

import { ScrollableItem, Button, List } from "components/index";
import { Instagram } from "components/Icons/social/Instagram";

import styles from "./MentorScrollableItem.module.scss";

export const MentorScrollableItem = ({
    name,
    src,
    index,
    array,
    className,
    color,
    list,
    description,
    instHref = "",
    slug,
    onClick,
}) => {
    const handleClick = useCallback(() => {
        onClick(slug);
    }, [onClick, slug]);

    return (
        <ScrollableItem
            className={cx(
                "shadow-soft rounded-xl bg-white transition-250 d-flex flex-column",
                { "mr-3": array.length - 1 !== index },
                styles.container,
                className,
            )}
        >
            <img
                className={cx("d-block image", styles.image)}
                height={300}
                width={300}
                src={src}
                alt={name}
            />
            <a
                className={cx("position-relative text-decoration-none px-2", styles.name)}
                href={instHref}
            >
                <h3 className="h3 d-flex align-items-center justify-content-center text-center mb-3 text-gray-900">
                    <Instagram width={20} height={20} className="mr-2" />
                    {name}
                </h3>
            </a>
            <div
                className={`text-wrap flex-grow-1 d-flex flex-column justify-content-between p-3 rounded-xl bg-${color} font-weight-semibold text-white text-highlighted`}
            >
                <div>
                    <p className="mb-2">{description}</p>
                    <List className="mb-2" type="features-white" list={list} />
                </div>
                <Button color="white" className="rounded-lg" block={true} onClick={handleClick}>
                    Більше
                </Button>
            </div>
        </ScrollableItem>
    );
};
