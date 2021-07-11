import React, { useCallback } from "react";
import cx from "classnames";

import { CourseStructure } from "./CourseStructure/CourseStructure";
import { AuthorsScrollable } from "./AuthorsScrollable/AuthorsScrollable";
import { CollapseGroup } from "components/";

export const DetailedInfo = ({ isPortable, strings }) => {
    const getCollapseProps = useCallback(
        (item, index, array) => ({
            togglerClassName: "font-weight-semibold text-left px-3",
            togglerContent: `✅ ${item.title}`,
            children: item.description,
            className: cx("border border-primary-new border-width-2 rounded-xl", {
                "mb-3": index + 1 !== array.length,
            }),
            contentClassName: "px-3 pb-3",
        }),
        [],
    );

    return (
        <>
            <h2 className="h0 mb-4">{strings.h2_1}</h2>
            <h3 className="font-weight-normal h2-28 mb-5">{strings.h3_1}</h3>
            <h2 className="h0 mb-4">{strings.h2_2}</h2>
            <CourseStructure className="mb-5" />
            <h2 className="h0">{strings.h2_3}</h2>
            <AuthorsScrollable
                className="mb-5"
                isPortable={isPortable}
                array={strings.authorsList}
            />
            <h2 className="h0 mb-4">{strings.h2_4}</h2>
            <CollapseGroup list={strings.valuesList} getCollapseProps={getCollapseProps} />
        </>
    );
};
