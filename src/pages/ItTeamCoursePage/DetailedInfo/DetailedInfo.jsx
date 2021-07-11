import React from "react";

import { CourseStructure } from "./CourseStructure/CourseStructure";
import { List } from "components/";
import { AuthorsScrollable } from "./AuthorsScrollable/AuthorsScrollable";

export const DetailedInfo = ({ isPortable, translations }) => {
    return (
        <>
            <h2 className="h0 mb-4">{translations.ua.h2_1}</h2>
            <h3 className="font-weight-normal h2-28 mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
            </h3>
            <h2 className="h0 mb-4">{translations.ua.h2_2}</h2>
            <CourseStructure className="mb-5" />
            <h2 className="h0 mb-2">{translations.ua.h2_3}</h2>
            <AuthorsScrollable
                className="mb-5"
                isPortable={isPortable}
                array={translations.ua.authorsList}
            />
            <h2 className="h0 mb-4">Під час навчання ви:</h2>
            <List
                itemClassName="h1 font-weight-normal pl-5"
                list={["feature", "feature", "feature"]}
                type="check"
            />
        </>
    );
};
