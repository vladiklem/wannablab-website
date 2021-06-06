import React from "react";

import { Scrollable } from "components/index";
import { mentorsList } from "constants/lists";

import { MentorScrollableItem } from "./MentorScrollableItem/MentorScrollableItem";

export const MentorsScrollableList = ({ toMentor, list = mentorsList, className }) => {
    return (
        <Scrollable
            containerClassName={className}
            hasArrows={true}
            isScrollbarVisible={false}
            offset={250}
            components={{
                Header: <h2 className="h3 font-weight-bold">Наші ментори</h2>,
            }}
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
