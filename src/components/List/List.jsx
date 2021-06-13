import React from "react";

export const List = ({ title, list = [], type = "primary-new", className }) => (
    <div className={className}>
        {title && <h2 className="h3 mb-2_5">{title}</h2>}
        <ul className={`list list-${type} text-left`}>
            {list.map(item => <li className="mb-1" key={item}>{item}</li>)}
        </ul>
    </div>
);
