import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import cx from "classnames";

import { UserProfile } from "pages/UserProfile/UserProfile";
import { Home } from "pages/Home/Home";
import { AdminPage } from "pages/AdminPage/AdminPage";
import { ChecklistPage } from "pages/ChecklistPage/ChecklistPage";
import { Button, TopBar, buttonColorEnum } from "components/index";
import { firebaseService } from "services/firebaseService";

import { initUsers } from "store/users/actions";
import { initEvents } from "store/events/actions";
import { initGroups } from "store/groups/actions";
import { initGeneral } from "store/general/actions";

import styles from "./RootContainer.module.scss";
import "assets/styles/index.scss";

firebaseService.init();

export const RootContainer = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = useCallback(() => {
        setIsOpen((isOpen) => !isOpen);
    }, [setIsOpen]);

    useEffect(() => {
        dispatch(initUsers());
        dispatch(initEvents());
        dispatch(initGroups());
        dispatch(initGeneral());
    }, [dispatch]);

    return (
        <Router>
            <TopBar className="d-none px-5 flex-row-reverse justify-content-between align-items-center">
                <Button color={buttonColorEnum.INVISIBLE} size="lg" onClick={toggle}>
                    Адмінка
                </Button>
                <a
                    className={cx(styles.topBarLink, "text-gray-900 font-weight-bold")}
                    href="#prices"
                >
                    Ціни
                </a>
            </TopBar>
            <Switch>
                <Route path="/" children={<Home isOpen={isOpen} toggle={toggle} />} exact />
                <Route path="/admin" children={<AdminPage />} />
                <Route path="/check-list" children={<ChecklistPage />} />
                <Route path="/user/:slag" children={<UserProfile />} />
            </Switch>
        </Router>
    );
};
