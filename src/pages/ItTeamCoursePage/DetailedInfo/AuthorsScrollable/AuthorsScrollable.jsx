import React, { useEffect, useState } from "react";

import { Scrollable } from "components/";

import { AuthorScrollableItem } from "./AuthorScrollableItem/AuthorScrollableItem";

const getWidth = (isPortable) =>
    isPortable
        ? document.documentElement.clientWidth - 64
        : document.querySelector("#wannablab-authors").clientWidth;

export const AuthorsScrollable = ({ array, isPortable, className }) => {
    const [offset, setOffset] = useState(100);

    useEffect(() => {
        console.log(getWidth(isPortable));
        setOffset(getWidth(isPortable));
    }, [isPortable]);

    return (
        <Scrollable
            className={className}
            hasArrows
            isScrollbarVisible={false}
            offset={offset}
            id="wannablab-authors"
        >
            {array.map(({ img, description, name }, index) => (
                <AuthorScrollableItem
                    src={img.src}
                    alt={img.alt}
                    index={index}
                    name={name}
                    description={description}
                    inst="/"
                    array={array}
                />
            ))}
        </Scrollable>
    );
};
