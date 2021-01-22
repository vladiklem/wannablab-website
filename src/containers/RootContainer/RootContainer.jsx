import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import cx from "classnames";

import { ModalsContainer } from "containers/ModalsContainer/ModalsContainer";
import { Home } from "pages/Home/Home";
import { AdminPage } from "pages/AdminPage/AdminPage";
import { ChecklistPage } from "pages/ChecklistPage/ChecklistPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import { Button, TopBar, buttonColorEnum } from "components/index";
import { firebaseService } from "services/firebaseService";
import { initUsers } from "store/users/actions";
import { initEvents } from "store/events/actions";
import { initGroups } from "store/groups/actions";
import { initGeneral } from "store/general/actions";
import { modalNamesEnum } from "constants/enums";

import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

import styles from "./RootContainer.module.scss";
import "assets/styles/index.scss";

firebaseService.init();

export const RootContainer = () => {
    const dispatch = useDispatch();
    const { withTopBar } = useSelector((state) => state.general);

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
    }, [dispatch]);

    return (
        <Router>
            <TopBar isVisible={withTopBar}>
                <Button color={buttonColorEnum.INVISIBLE} size="lg" onClick={openLoginModal}>
                    Адмінка
                </Button>
                <a
                    className={cx(styles.topBarLink, "text-gray-900 font-weight-bold")}
                    href="#prices"
                >
                    Ціни
                </a>
            </TopBar>
            <main className={styles.background}>
                <div className={cx({ "container-with-top-bar": withTopBar })}>
                    <ModalsContainer modalState={modalState} />
                    <Switch>
                        <Route path="/" render={renderRoute({ routeComponent: Home })} exact />
                        <Route
                            path="/check-list"
                            render={renderRoute({ routeComponent: ChecklistPage })}
                        />
                        <PrivateRoute path="/admin" component={AdminPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </main>
        </Router>
    );
};
