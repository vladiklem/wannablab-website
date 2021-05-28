import React from "react";
import cx from "classnames";

import { Scrollable } from "components/index";

import { GroupScrollableItem } from "./GroupScrollableItem/GroupScrollableItem";

export const GroupsScrollableList = ({ isPortable, list = [], ...props }) => (
    <Scrollable
        hasArrows={true}
        isScrollbarVisible={false}
        className={cx("mt-n2 mb-2", { "mx-n4": isPortable })}
        {...props}
    >
        {list.map((item, index, array) => (
            <GroupScrollableItem index={index} array={array} item={item} />
        ))}
    </Scrollable>
);
