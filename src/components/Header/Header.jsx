import React from "react";
import cx from "classnames";
import { useMediaQuery } from "react-responsive";

import { NavItem } from "./NavItem/NavItem";
import { mediaBreakpointsEnum } from "constants/enums";

import logo from "assets/images/logo.png";

export const Header = ({ onCoursesClick, onPricesClick }) => {
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    return (
        <header
            className={cx("container d-flex pt-4", {
                "flex-column": isPortable,
                "align-items-center": !isPortable,
            })}
        >
            <div className="d-flex align-items-center justify-content-between">
                <img src={logo} width="50" height="60" alt="Logo" />
                <h1 className={cx("font-weight-bold h1", { "ml-4": !isPortable })}>wannablab</h1>
                <span className={cx("burger-icon", { "d-none": !isPortable })}></span>
            </div>
            <nav
                className={cx("pt-2 pb-2", { "pl-1 mt-4 d-none": isPortable, "pl-6": !isPortable })}
            >
                <ul className="d-flex">
                    <NavItem id="wannablab-teachers">Вчителі</NavItem>
                    <NavItem id="wannablab-prices" onClick={onPricesClick}>
                        Ціни
                    </NavItem>
                    <NavItem id="wannablab-courses" onClick={onCoursesClick}>
                        Курси
                    </NavItem>
                    <NavItem id="wannablab-feedback">Відгуки</NavItem>
                </ul>
            </nav>
        </header>
    );
};
