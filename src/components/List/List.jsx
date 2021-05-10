import React from "react";

export const List = ({ title, list, type = "features", className, ...props }) => (
    <div className={className}>
        {title && <h2 className="h3 mb-2_5">{title}</h2>}
        <ul className={`${type}-list text-left`}>
            {list.map(item => <li className="mb-1" key={item}>{item}</li>)}
        </ul>
    </div>
);
