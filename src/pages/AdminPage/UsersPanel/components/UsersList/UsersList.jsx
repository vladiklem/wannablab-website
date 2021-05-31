import React from "react";

import { UserItem } from "../UserItem/UserItem";

export const UsersList = ({ users, onDelete, onEdit, onPay }) => (
    <ul className="px-4">
        {users.map((user) => (
            <UserItem
                key={user.id || user.username}
                user={user}
                onDelete={onDelete}
                onEdit={onEdit}
                onPay={onPay}
            />
        ))}
    </ul>
);
