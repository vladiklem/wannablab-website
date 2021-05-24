import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";

import { ModalsContainer } from "containers/ModalsContainer/ModalsContainer";
import { Home } from "pages/Home/Home";
import { BlaberRoom } from "pages/BlaberRoom/BlaberRoom";
import { AdminPage } from "pages/AdminPage/AdminPage";
import { ChecklistPage } from "pages/ChecklistPage/ChecklistPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import { CoursePage } from "pages/CoursePage/CoursePage";
import { Button, TopBar, buttonColorEnum, Header, Footer } from "components/index";
import { firebaseService } from "services/firebaseService";
import { initUsers } from "store/users/actions";
import { initEvents } from "store/events/actions";
import { initGroups } from "store/groups/actions";
import { initGeneral } from "store/general/actions";
import { initCurrentUser } from "store/currentUser/actions";
import { isAdminSelector } from "selectors/general";
import { isLoggedInSelector } from "selectors/blaber";
import { modalNamesEnum, mediaBreakpointsEnum } from "constants/enums";

import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

import styles from "./RootContainer.module.scss";
import "assets/styles/index.scss";

firebaseService.init();

export const RootContainer = () => {
    const dispatch = useDispatch();

    const [modalState, setModalState] = useState(undefined);
    const [coursesClicked, setCoursesClicked] = useState(false);
    const [pricesClicked, setPricesClicked] = useState(false);

    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const openLoginModal = useCallback(
        () => setModalState({ name: modalNamesEnum.LOGIN, isOpen: true }),
        [setModalState],
    );

    const onCoursesClick = () => {
        setCoursesClicked(true);
        setTimeout(() => {
            setCoursesClicked(false);
        }, 560);
    };

    const onPricesClick = () => {
        setPricesClicked(true);
        setTimeout(() => {
            setPricesClicked(false);
        }, 560);
    };

    // const openAdModal = useCallback(
    //     () => setModalState({ name: modalNamesEnum.AD, isOpen: true }),
    //     [setModalState],
    // );

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

    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(toggleModal(modalNamesEnum.AD));
    //     }, 5000);
    // }, [dispatch]);

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
            <Header
                isPortable={isPortable}
                onCoursesClick={onCoursesClick}
                onPricesClick={onPricesClick}
            />
            <main
                className={cx(styles.background, {
                    "list-scale-animation1": coursesClicked,
                    "list-scale-animation2": pricesClicked,
                })}
            >
                <ModalsContainer modalState={modalState} />
                <Switch>
                    <Route path="/" render={renderRoute({ routeComponent: Home })} exact />
                    <Route
                        path="/course/:slug"
                        render={renderRoute({ routeComponent: CoursePage })}
                    />
                    <Route
                        path="/check-list"
                        render={renderRoute({ routeComponent: ChecklistPage })}
                    />
                    <PrivateRoute
                        path="/profile"
                        component={BlaberRoom}
                        selector={isLoggedInSelector}
                    />
                    <PrivateRoute path="/admin" component={AdminPage} selector={isAdminSelector} />
                    <Route component={NotFoundPage} />
                </Switch>
            </main>
            <Footer isPortable={isPortable} />
        </Router>
    );
};
