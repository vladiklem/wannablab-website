import React from "react";

import { MentorsScrollableList } from "components/styled/MentorsScrollableList/MentorsScrollableList";

export const InteractionSections = ({ toMentor }) => {
    return (
        <>
            <section id="wannablab-teachers" className="container pt-3 mb-5">
                <h2 className="h2 font-weight-bold mb-3">Наші ментори</h2>
                <MentorsScrollableList toMentor={toMentor} />
            </section>
        </>
    );
};
