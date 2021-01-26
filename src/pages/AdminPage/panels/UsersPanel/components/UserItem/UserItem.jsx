import React, { useMemo, useCallback } from "react";

import { Button, Collapse } from "components/index";
import avatar from "assets/images/uramen12.jpeg";

import styles from "./UserItem.module.scss";

export const UserItem = ({ user, onEdit, onDelete, onPay }) => {
    const { fullName, description } = user;

    const togglerContent = useMemo(
        () => (
            <span className="d-flex align-items-center">
                <img src={avatar} alt="User avatar" className={styles.userAvatar} />
                <h3 className="ml-3 mb-0">{fullName}</h3>
            </span>
        ),
        [fullName],
    );

    const handleEdit = useCallback(() => onEdit(user), [user, onEdit]);

    const handleDelete = useCallback(() => onDelete(user.id), [user, onDelete]);

    const handlePay = useCallback(() => onPay(user.id), [user, onPay]);

    return (
        <li className="mb-4">
            <Collapse togglerContent={togglerContent} className="w-100 bg-white">
                <div>{description}</div>
                <div>
                    <Button onClick={handleEdit} color="primary" className="mr-3">Змінити</Button>
                    <Button onClick={handlePay} color="success" className="mr-3">Додати оплату</Button>
                    <Button onClick={handleDelete} color="danger">Видалити</Button>
                </div>
            </Collapse>
        </li>
    );
};
