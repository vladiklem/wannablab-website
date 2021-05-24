import React, { useCallback } from "react";
import cx from "classnames";

import { Team } from "components/Icons/Team";
import { ScrollableItem, Button, List } from "components/index";

export const GroupScrollableItem = ({ item: { title, members }, index, array, onGroupSelect }) => {
    const onClick = useCallback(() => {
        onGroupSelect({ title });
    }, [onGroupSelect, title]);

    return (
        <ScrollableItem
            className={cx("shadow-soft transition-250 rounded-xl bg-white", {
                "mr-3": index !== array.length - 1,
            })}
        >
            <div className="p-4">
                <h3 className="h3 font-weight-bold mb-1">{title}</h3>
                <List list={["Понеділок, 19:00", "Середа, 19:00"]} />
                <div className="d-flex align-items-center">
                    <Team height={32} width={32} />
                    <h3 className="ml-2 h3">{`${members.length}/4`}</h3>
                </div>
                <Button
                    block={true}
                    onClick={onClick}
                    color="green-soft"
                    className="rounded-lg mt-4 text-highlighted"
                >
                    записатися
                </Button>
            </div>
        </ScrollableItem>
    );
};