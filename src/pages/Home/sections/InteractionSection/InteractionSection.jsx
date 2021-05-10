import React from "react";
import cx from "classnames";

import { Scrollable, ScrollableItem } from "components/index";
import { servicesList, mentorsList } from "constants/lists";
import { GroupScrollableItem } from "../../components/GroupScrollableItem/GroupScrollableItem";
import { MentorScrollableItem } from "../../components/MentorScrollableItem/MentorScrollableItem";

export const InteractionSection = ({ groups, onGroupSelect, onMentorSelect }) => {
    return (
        <section>
            <h2 className="h2 mb-4">Наші ментори</h2>
            <Scrollable>
                {mentorsList.map((item, index) => (
                    <MentorScrollableItem
                        onMentorSelect={onMentorSelect}
                        item={item}
                        index={index}
                        items={mentorsList}
                        key={item.name}
                    />
                ))}
            </Scrollable>
            <h2 className="h2 mb-4">Календар груп</h2>
            <Scrollable offset={200}>
                {groups.map((item, index) => (
                    <GroupScrollableItem
                        item={item}
                        onGroupSelect={onGroupSelect}
                        index={index}
                        items={groups}
                        key={item.title}
                    />
                ))}
            </Scrollable>
            <h2 className="h2 mt-5 mb-4">Що ми пропонуємо?</h2>
            <Scrollable>
                {servicesList.map(({ title, description, slug, imgSrc }, index) => (
                    <ScrollableItem
                        className={cx("shadow-soft py-2 px-3", {
                            "mr-3": index !== servicesList.length - 1,
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
