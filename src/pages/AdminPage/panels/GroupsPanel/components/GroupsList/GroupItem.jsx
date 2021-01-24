import React from "react";

export const GroupItem = ({ title, members, mentor }) => {
    return (
        <li className="border rounded py-2 px-3 bg-white">
            <h3 className="mb-2">{title}</h3>
            <h4>{mentor}</h4>
            <div>
                {members.map(({ label }) => <h5>{label}</h5>)}
            </div>
        </li>
    );
};