import React from "react";
import cx from "classnames";

import { Scrollable, ScrollableItem, List, Button, Collapse } from "components/index";
import { servicesList, mentorsList } from "constants/lists";
import { GroupScrollableItem } from "../../components/GroupScrollableItem/GroupScrollableItem";
import { MentorScrollableItem } from "../../components/MentorScrollableItem/MentorScrollableItem";

import styles from "../../Home.module.scss";

const items = [
    {
        title: "Curious otters",
        schedule: "ПН, СР 19:00",
        membersCount: 3,
    },
    {
        title: "WB-16",
        schedule: "ВТ, ЧТ 19:00",
        membersCount: 3,
    },
    {
        title: "WB-15",
        schedule: "ВТ, ЧТ 18:00",
        membersCount: 3,
    },
    {
        title: "WB-15",
        schedule: "ВТ, ЧТ 18:00",
        membersCount: 3,
    },
    {
        title: "WB-15",
        schedule: "ВТ, ЧТ 18:00",
        membersCount: 3,
    },
    {
        title: "WB-15",
        schedule: "ВТ, ЧТ 18:00",
        membersCount: 3,
    },
];

export const InteractionSection = ({ onGroupSelect, onMentorSelect }) => {
    return (
        <section>
            <h2 className="h2 mb-2">Наші ментори</h2>
            <Scrollable>
                {mentorsList.map((item, index) => (
                    <MentorScrollableItem
                        onMentorSelect={onMentorSelect}
                        item={item}
                        index={index}
                        items={mentorsList}
                    />
                ))}
            </Scrollable>
            <h2 className="h2 mb-2">Календар груп</h2>
            <Scrollable offset={200}>
                {items.map((item, index) => (
                    <GroupScrollableItem
                        item={item}
                        onGroupSelect={onGroupSelect}
                        index={index}
                        items={items}
                    />
                ))}
            </Scrollable>
            <h2 className="h2 mt-5 mb-2">Що ми пропонуємо?</h2>
            <Scrollable>
                {servicesList.map(({ title, description, slug, imgSrc }, index) => (
                    <ScrollableItem
                        className={cx("shadow-soft py-2 px-3", {
                            "mr-3": index !== items.length - 1,
                        })}
                        key={slug}
                    >
                        <img
                            className="d-block ml-auto mr-auto"
                            height={150}
                            width={150}
                            src={imgSrc}
                            alt={description}
                        />
                        <h3 className="h3 text-center">{title}</h3>
                    </ScrollableItem>
                ))}
            </Scrollable>
        </section>
    );
};
