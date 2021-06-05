import React from "react";

import { GroupItem } from "../GroupItem/GroupItem";

export const GroupsList = ({ groups, onEdit, onDelete }) => {
    return (
        <ul>
            {groups.map((group) => (
                <li key={group.id}>
                    <GroupItem group={group} onEdit={onEdit} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
};
