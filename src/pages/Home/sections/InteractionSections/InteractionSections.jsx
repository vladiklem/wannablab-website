import React from "react";

import { Scrollable } from "components/index";
import { mentorsList } from "constants/lists";
import { MentorScrollableItem } from "../../components/MentorScrollableItem/MentorScrollableItem";

export const InteractionSections = ({ groups, onGroupSelect, onMentorSelect }) => {
    return (
        <>
            <section id="wannablab-teachers" className="container pt-5 mb-5">
                <h2 className="h2 font-weight-bold mb-3">Наші ментори</h2>
                <Scrollable containerClassName="ml-n4 mr-n4">
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
            </section>
        </>
    );
};
