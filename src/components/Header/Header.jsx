import React, { useCallback, useState } from "react";
import cx from "classnames";

import { NavItem } from "./NavItem/NavItem";

import { buttonColorEnum, Button } from "components/Button/Button";

import styles from "./Header.module.scss";

import logo from "assets/images/logo.png";

export const Header = ({ onCoursesClick, onPricesClick, isPortable }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = useCallback(() => {
        setIsOpen((open) => !open);
    }, [setIsOpen]);

    return (
        <header
            className={cx("container d-flex pt-4", {
                "flex-column": isPortable,
                "align-items-center": !isPortable,
            })}
        >
            <div className="d-flex align-items-center justify-content-between">
                <a href="/">
                    <img src={logo} width="50" height="60" alt="wannablab logo" />
                </a>
                <a href="/" className="text-decoration-none text-gray-900">
                    <h1 className={cx("font-weight-bold h1", { "ml-4": !isPortable })}>
                        wannablab
                    </h1>
                </a>
                <Button
                    className={cx({ "d-none": !isPortable })}
                    color={buttonColorEnum.UNSTYLED}
                    onClick={onClick}
                >
                    меню
                </Button>
            </div>
            <nav
                className={cx("transition-250 overflow-hidden", {
                    [styles.mobileMenu]: isPortable,
                    "pl-6": !isPortable,
                    [styles.visible]: isPortable && isOpen,
                })}
            >
                <ul className="d-flex scrollbar-invisible overflow-auto py-4 pl-3">
                    <NavItem id="wannablab-teachers">Вчителі</NavItem>
                    <NavItem id="wannablab-prices" onClick={onPricesClick}>
                        Ціни
                    </NavItem>
                    <NavItem id="wannablab-courses" onClick={onCoursesClick}>
                        Курси
                    </NavItem>
                    <NavItem id="wannablab-feedback">Відгуки</NavItem>
                    <NavItem id="wannablab-footer">Контакти</NavItem>
                </ul>
                <span
                    onClick={onClick}
                    className={cx("flex-row-reverse ml-auto pr-4 mt-n2", {
                        "d-none": !isPortable,
                        "d-flex": isPortable,
                    })}
                >
                    закрити
                </span>
            </nav>
        </header>
    );
};
