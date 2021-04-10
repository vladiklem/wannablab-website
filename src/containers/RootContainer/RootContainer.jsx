import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import cx from "classnames";

import { ModalsContainer } from "containers/ModalsContainer/ModalsContainer";
import { Home } from "pages/Home/Home";
import { BlaberRoom } from "pages/BlaberRoom/BlaberRoom";
import { AdminPage } from "pages/AdminPage/AdminPage";
import { ChecklistPage } from "pages/ChecklistPage/ChecklistPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import { Button, TopBar, buttonColorEnum } from "components/index";
import { firebaseService } from "services/firebaseService";
import { initUsers } from "store/users/actions";
import { initEvents } from "store/events/actions";
import { initGroups } from "store/groups/actions";
import { initGeneral } from "store/general/actions";
import { initCurrentUser } from "store/currentUser/actions";
import { isAdminSelector } from "selectors/general";
import { isLoggedInSelector } from "selectors/blaber";
import { modalNamesEnum } from "constants/enums";

import logo from "assets/images/logo.png";

import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

import styles from "./RootContainer.module.scss";
import "assets/styles/index.scss";

firebaseService.init();

export const RootContainer = () => {
    const dispatch = useDispatch();

    const [modalState, setModalState] = useState(undefined);

    const openLoginModal = useCallback(
        () => setModalState({ name: modalNamesEnum.LOGIN, isOpen: true }),
        [setModalState],
    );
    const renderRoute = useCallback(
        ({ routeComponent: Component }) => (props) => <Component {...props} />,
        [],
    );

    useEffect(() => {
        dispatch(initUsers());
        dispatch(initEvents());
        dispatch(initGroups());
        dispatch(initGeneral());
        dispatch(initCurrentUser());
    }, [dispatch]);

    return (
        <Router>
            <TopBar isVisible={false}>
                <Button color={buttonColorEnum.UNSTYLED} size="lg" onClick={openLoginModal}>
                    Залогінитись
                </Button>
                <a
                    className={cx(styles.topBarLink, "text-gray-900 font-weight-bold")}
                    href="#prices"
                >
                    Ціни
                </a>
            </TopBar>
            <header className="px-3 pt-3 d-flex align-items-center">
                <img src={logo} width="50" height="60" alt="Logo" />
                <h1 className={cx("font-chewy-regular ml-4 mb-0", styles.heading)}>wannablab</h1>
            </header>
            <main className={styles.background}>
                <div className={cx({ "container-with-top-bar": false })}>
                    <ModalsContainer modalState={modalState} />
                    <Switch>
                        <Route path="/" render={renderRoute({ routeComponent: Home })} exact />
                        <Route
                            path="/check-list"
                            render={renderRoute({ routeComponent: ChecklistPage })}
                        />
                        <PrivateRoute
                            path="/profile"
                            component={BlaberRoom}
                            selector={isLoggedInSelector}
                        />
                        <PrivateRoute
                            path="/admin"
                            component={AdminPage}
                            selector={isAdminSelector}
                        />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </main>
            <footer className="px-3_5 py-4">
                <h2 className="regular">Powered by wannablab family</h2>
                <div>
                    <p className="regular">Found more at:</p>
                </div>
            </footer>
        </Router>
    );
};
