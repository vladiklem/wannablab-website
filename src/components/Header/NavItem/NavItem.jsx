import React from "react";

export const NavItem = ({ name, id, children, ...props }) => (
    <li>
        <a
            href={`#${id}`}
            className="text-gray-900 py-2 px-4 text-decoration-none shadow-medium mr-3 border-blue-500 rounded border border-primary-soft shadow-hover transition-250"
            {...props}
        >
            {children}
        </a>
    </li>
);
