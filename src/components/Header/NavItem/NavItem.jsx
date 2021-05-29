import React from "react";
import { Button, buttonColorEnum } from "components/index";

export const NavItem = ({ id, children, ...props }) => (
    <li>
        <Button
            href={`#${id}`}
            className="bg-white text-gray-900 py-2 px-4 text-decoration-none shadow-soft mr-3 border-blue-500 rounded border border-primary-soft transition-250"
            color={buttonColorEnum.UNSTYLED}
            {...props}
        >
            {children}
        </Button>
    </li>
);
