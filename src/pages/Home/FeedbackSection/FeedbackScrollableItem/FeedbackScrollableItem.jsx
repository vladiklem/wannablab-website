import React from "react";
import cx from "classnames";

import { Quote } from "components/styled/index";
import { ScrollableItem } from "components/index";

import styles from "./FeedbackScrollableItem.module.scss";

export const FeedbackScrollableItem = ({
    name,
    index,
    length,
    isPortable,
    avatar,
    description,
}) => (
    <ScrollableItem className={cx(styles.item, { "mr-4": index < length })} key={name}>
        <Quote
            src={avatar}
            text={description}
            author={name}
            isPortable={isPortable}
            className="p-2"
        />
    </ScrollableItem>
);
