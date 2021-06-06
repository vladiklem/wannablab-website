import React, { useCallback, useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";

import { buttonColorEnum, SideBar, Button } from "components/index";
import { scrollToTop } from "helpers/general";
import { mediaBreakpointsEnum } from "constants/enums";

import { EventsPanel } from "./EventsPanel/EventsPanel";
import { UsersPanel } from "./UsersPanel/UsersPanel";
import { GroupsPanel } from "./GroupsPanel/GroupsPanel";
import { CustomersPanel } from "./CustomersPanel/CustomersPanel";

import styles from "./AdminPage.module.scss";
import { ArrowRightLong } from "components/Icons/ArrowRightLong";

export const AdminPage = () => {
    const { url, path } = useRouteMatch();
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = useCallback(() => {
        setIsOpen((open) => !open);
    }, [setIsOpen]);

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <>
            <SideBar isOpen={isOpen} title="wannablab">
                <Button
                    className="px-3 py-2 mx-2 mt-3"
                    color={buttonColorEnum.UNSTYLED}
                    onClick={toggleSidebar}
                >
                    закрити
                </Button>
                <ul className="pt-3 px-2">
                    <li className="px-3 py-2">
                        <Link to={`${url}/users`}>Блабери</Link>
                    </li>
                    {/* <li>
                        <Link to={`${url}/events`}>Івенти</Link>
                    </li> */}
                    <li className="px-3 py-2">
                        <Link to={`${url}/groups`}>Групи</Link>
                    </li>
                    {/* <li>
                        <Link to={`${url}/app`}>Налаштування</Link>
                    </li> */}
                    <li className="px-3 py-2">
                        <Link to={`${url}/customers`}>Кастомери</Link>
                    </li>
                </ul>
            </SideBar>
            <div>
                <div className="ml-4 mt-4">
                    <Button color={buttonColorEnum.UNSTYLED} onClick={toggleSidebar}>
                        меню <ArrowRightLong height={24} />
                    </Button>
                </div>
                <div className={cx(styles.container, { [styles.isDektop]: !isPortable })}>
                    <Switch>
                        <Route exact={true} path={`${path}/customers`}>
                            <CustomersPanel isPortable={isPortable} />
                        </Route>
                        <Route path={`${path}/users`}>
                            <UsersPanel />
                        </Route>
                        <Route path={`${path}/events`}>
                            <EventsPanel />
                        </Route>
                        <Route path={`${path}/groups`}>
                            <GroupsPanel />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
};
