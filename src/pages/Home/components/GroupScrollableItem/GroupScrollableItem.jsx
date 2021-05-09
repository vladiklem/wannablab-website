import React, { useCallback } from "react";
import cx from "classnames";

import { Team } from "components/Icons/Team";
import { ScrollableItem, Button, List } from "components/index";
import styles from "../../Home.module.scss";

export const GroupScrollableItem = ({
    item: { title, membersCount },
    index,
    items,
    onGroupSelect,
}) => {
    const onClick = useCallback(
        () => {
            onGroupSelect({ title });
        },
        [onGroupSelect, title],
    );

    return (
        <ScrollableItem
            className={cx("shadow-soft border-radius-20", {
                "mr-3": index !== items.length - 1,
            })}
        >
            <div className={cx("p-4", styles.card)}>
                <h3 className="h3 font-weight-bold mb-1">{title}</h3>
                <List list={["Понеділок, 19:00", "Середа, 19:00"]} />
                <div className="d-flex align-items-center">
                    <Team height={32} width={32} />
                    <h3 className="ml-2 h3">{`${membersCount}/4`}</h3>
                </div>
                <Button
                    block={true}
                    onClick={onClick}
                    color="green-soft"
                    className="border-radius-16 mt-4 text-highlighted"
                >
                    записатися
                </Button>
            </div>
        </ScrollableItem>
    );
};
