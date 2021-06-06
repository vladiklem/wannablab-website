import React from "react";
import cx from "classnames";

import { Scrollable } from "components/index";

import { GroupScrollableItem } from "./GroupScrollableItem/GroupScrollableItem";

export const GroupsScrollableList = ({ isPortable, list = [], ...props }) => (
    <Scrollable
        hasArrows={true}
        isScrollbarVisible={false}
        className={cx("mt-n2 mb-2", { "mx-n4": isPortable })}
        offset={250}
        {...props}
        components={{
            Header: <h2 className="h3 font-weight-bold px-4">Календар груп</h2>,
        }}
    >
        {list.map((item, index, array) => (
            <GroupScrollableItem key={item.id} index={index} array={array} item={item} />
        ))}
    </Scrollable>
);
