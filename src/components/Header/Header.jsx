import React, { useCallback, useState } from "react";
import { useHistory } from "react-router";
import cx from "classnames";

import { buttonColorEnum, Button } from "components/Button/Button";

import { NavItem } from "./NavItem/NavItem";
import styles from "./Header.module.scss";

import logo from "assets/images/logo.png";

const navigation = [
    {
        children: "Вчителі",
        id: "wannablab-teachers",
    },
    {
        children: "Ціни",
        id: "wannablab-prices",
    },
    {
        children: "Курси",
        id: "wannablab-courses",
    },
    {
        children: "Відгуки",
        id: "wannablab-feedback",
    },
    {
        children: "Контакти",
        id: "wannablab-footer",
    },
];

export const Header = ({ onCoursesClick, onPricesClick, isPortable, isVisible }) => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const onClick = useCallback(() => {
        setIsOpen((open) => !open);
    }, [setIsOpen]);

    const handleRedirect = useCallback(
        (id) => {
            history.location.pathname !== "/" && history.push("/");
            id === "wannablab-courses" && onCoursesClick();
            id === "wannablab-prices" && onPricesClick();
        },
        [history, onCoursesClick, onPricesClick],
    );

    return (
        <header
            className={cx({
                "flex-column": isPortable,
                "align-items-center": !isPortable,
                "d-none": !isVisible,
                "container d-flex pt-4": isVisible,
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
                    {navigation.map((item) => (
                        <NavItem onClick={handleRedirect} key={item.id} {...item} />
                    ))}
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
