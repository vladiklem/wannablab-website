import React, { useState, useCallback } from "react";
import cx from "classnames";

import { ScrollableItem, Button, List, Collapse } from "components/index";
import styles from "../../Home.module.scss";

export const MentorScrollableItem = ({ item: { name, avatar }, index, items, onMentorSelect }) => {
    const [isToggled, setIsToggled] = useState(false);

    const onToggle = useCallback(() => {
        setIsToggled((toggled) => !toggled);
    }, [setIsToggled]);

    const handleClick = useCallback(() => {
        onMentorSelect({ name });
    }, [onMentorSelect, name]);

    return (
        <ScrollableItem
            className={cx("shadow-soft rounded-20", {
                "mr-3": index !== items.length - 1,
            })}
        >
            <div className={cx("transition-250 px-4 pt-4", styles.card, { [styles.card__toggled]: isToggled })}>
                <img
                    className={cx("d-block rounded-20", styles.img)}
                    height={272}
                    width={272}
                    src={avatar}
                    alt={name}
                />
                <div className="pt-3 px-2">
                    <h3 className="h2 text-center">{name}</h3>
                    <Collapse
                        className="w-100 bg-white"
                        contentClassName=""
                        togglerContent={
                            <>
                                <List list={["IELTS на C1", "1.5р досвіду"]} />
                                <p
                                    className={cx("rounded-20 py-2 transition-250 mt-3", {
                                        "mb-n3 shadow-soft": !isToggled,
                                    })}
                                >
                                    більше...
                                </p>
                            </>
                        }
                        onToggle={onToggle}
                    >
                        <List className="mb-3" list={["Урок 400 UAH", "Місячний курс 2900 UAH"]} />
                        <Button
                            block={true}
                            color="green-soft"
                            className="rounded-16 font-weight-semibold text-hilighted"
                            onClick={handleClick}
                        >
                            Хочу
                        </Button>
                    </Collapse>
                </div>
            </div>
        </ScrollableItem>
    );
};
