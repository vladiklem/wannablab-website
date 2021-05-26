import React from "react";

import { Scrollable } from "components/index";
import { mentorsList } from "constants/lists";
import { MentorScrollableItem } from "components/styled/MentorScrollableItem/MentorScrollableItem";

export const InteractionSections = ({ toMentor, onMentorSelect }) => {
    return (
        <>
            <section id="wannablab-teachers" className="container pt-3 mb-5">
                <h2 className="h2 font-weight-bold mb-3">Наші ментори</h2>
                <Scrollable
                    containerClassName="ml-n4 mr-n4"
                    hasArrows={true}
                    isScrollbarVisible={false}
                    offset={250}
                >
                    {mentorsList.map(({ name, ...itemProps }, index) => (
                        <MentorScrollableItem
                            index={index}
                            array={mentorsList}
                            key={name}
                            name={name}
                            onClick={toMentor}
                            {...itemProps}
                        />
                    ))}
                </Scrollable>
            </section>
        </>
    );
};
