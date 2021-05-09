import React from "react";

export const List = ({ title, list, type = "features", className, ...props }) => (
    <div className={className}>
        {title && <h2 className="h2 mb-2">{title}</h2>}
        <ul className={`${type}-list text-left`}>
            {list.map(item => <li>{item}</li>)}
        </ul>
    </div>
);
