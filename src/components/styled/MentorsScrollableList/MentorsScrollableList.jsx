import React from "react";

import { Scrollable } from "components/index";
import { mentorsList } from "constants/lists";

import { MentorScrollableItem } from "./MentorScrollableItem/MentorScrollableItem";

export const MentorsScrollableList = ({ toMentor, list = mentorsList }) => {
    return (
        <Scrollable
                    containerClassName="ml-n4 mr-n4"
                    hasArrows={true}
                    isScrollbarVisible={false}
                    offset={250}
                >
                    {list.map(({ name, ...itemProps }, index) => (
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
    );
};
