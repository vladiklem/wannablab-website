import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";

import { ModalsContainer } from "containers/ModalsContainer/ModalsContainer";
import { Home } from "pages/Home/Home";
import { AdminPage } from "pages/AdminPage/AdminPage";
import { ChecklistPage } from "pages/ChecklistPage/ChecklistPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import { CoursePage } from "pages/CoursePage/CoursePage";
import { MentorPage } from "pages/MentorPage/MentorPage";
import { QuizPage } from "pages/QuizPage/QuizPage";
import { TestPage } from "pages/TestPage/TestPage";
import { Header, Footer } from "components/index";
import { firebaseService } from "services/firebaseService";
import { initUsers } from "store/users/actions";
import { initEvents } from "store/events/actions";
import { initGroups } from "store/groups/actions";
import { initApp } from "store/app/actions";
import { initCurrentUser } from "store/currentUser/actions";
import { selectAdmin } from "store/app/selectors";
import { toggleModal } from "store/modals/actions";
import { modalNamesEnum, mediaBreakpointsEnum } from "constants/enums";

import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { RouterListener } from "./RouterListener/RouterListener";

import styles from "./RootContainer.module.scss";
import "assets/styles/index.scss";
import { initLeads } from "store/leads/actions";

firebaseService.init();

export const RootContainer = () => {
    const dispatch = useDispatch();
    const admin = useSelector(selectAdmin);
    const [coursesClicked, setCoursesClicked] = useState(false);
    const [pricesClicked, setPricesClicked] = useState(false);

    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const openLoginModal = useCallback(() => dispatch(toggleModal(modalNamesEnum.LOGIN)), [
        dispatch,
    ]);

    const onCoursesClick = useCallback(() => {
        setTimeout(() => {
            setCoursesClicked(true);
        }, 300);
        setTimeout(() => {
            setCoursesClicked(false);
        }, 1260);
    }, []);

    const onPricesClick = () => {
        setPricesClicked(true);
        setTimeout(() => {
            setPricesClicked(false);
        }, 560);
    };

    const renderRoute = useCallback(
        ({ routeComponent: Component }) => (props) => <Component {...props} />,
        [],
    );

    useEffect(() => {
        dispatch(initUsers());
        dispatch(initEvents());
        dispatch(initGroups());
        dispatch(initApp());
        dispatch(initCurrentUser());
        dispatch(initLeads());
    }, [dispatch]);

    return (
        <Router>
            <Header
                isPortable={isPortable}
                onCoursesClick={onCoursesClick}
                onPricesClick={onPricesClick}
                isVisible={!admin.isVisible}
            />
            <main
                className={cx(styles.background, {
                    "list-scale-animation1": coursesClicked,
                    "list-scale-animation2": pricesClicked,
                })}
            >
                <ModalsContainer />
                <RouterListener />
                <Switch>
                    <Route path="/" render={renderRoute({ routeComponent: Home })} exact />
                    <Route
                        path="/course/:slug"
                        render={renderRoute({ routeComponent: CoursePage })}
                    />
                    <Route
                        path="/mentor/:slug"
                        render={renderRoute({ routeComponent: MentorPage })}
                    />
                    <Route
                        path="/check-list"
                        render={renderRoute({ routeComponent: ChecklistPage })}
                    />
                    <Route path="/test" render={renderRoute({ routeComponent: TestPage })} />
                    <Route path="/quiz/:slug" render={renderRoute({ routeComponent: QuizPage })} />
                    <PrivateRoute
                        path="/admin"
                        isLoading={admin.isLoading}
                        hasAccess={admin.isAdmin}
                        component={AdminPage}
                        selector={selectAdmin}
                    />
                    <Route component={NotFoundPage} />
                </Switch>
            </main>
            <Footer
                handleLogin={openLoginModal}
                isPortable={isPortable}
                isVisible={!admin.isVisible}
            />
        </Router>
    );
};
