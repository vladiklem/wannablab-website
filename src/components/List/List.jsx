import React from "react";

export const List = ({ title, list = [], type = "primary-new", className, isShort = false }) => {
    const finalList = isShort ? list.slice(0, 2) : list;

    return (
        <div className={className}>
            {title && <h2 className="h3 mb-2_5">{title}</h2>}
            <ul className={`list list-${type} text-left`}>
                {finalList.map((item) => (
                    <li className="mb-1" key={item}>
                        {item}
                    </li>
                ))}
                {isShort && (
                    <li className="mb-1" key="uniq">
                        Більше...👇
                    </li>
                )}
            </ul>
        </div>
    );
};
