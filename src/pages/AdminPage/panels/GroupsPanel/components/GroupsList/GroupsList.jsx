import React from "react";

import { GroupItem } from "./GroupItem";

export const GroupsList = ({ groups }) => {
    return (
        <ul>
           {groups.map((group) => <GroupItem {...group} />)} 
        </ul>
    );
};