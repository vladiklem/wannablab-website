import React, { useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { SideBar } from "components/index";
import { scrollToTop } from "helpers/general";
import { mediaBreakpointsEnum } from "constants/enums";

import { EventsPanel } from "./EventsPanel/EventsPanel";
import { UsersPanel } from "./UsersPanel/UsersPanel";
import { GroupsPanel } from "./GroupsPanel/GroupsPanel";
import { CustomersPanel } from './CustomersPanel/CustomersPanel';
// import { AppPanel } from "./AppPanel/AppPanel";

export const AdminPage = () => {
    const { url, path } = useRouteMatch();
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <>
            <SideBar title="wannablab" isOpen={true}>
                <ul>
                    {/* <li>
                        <Link to={`${url}/users`}>Блабери</Link>
                    </li>
                    <li>
                        <Link to={`${url}/events`}>Івенти</Link>
                    </li>
                    <li>
                        <Link to={`${url}/groups`}>Групи</Link>
                    </li>
                    <li>
                        <Link to={`${url}/app`}>Налаштування</Link>
                    </li> */}
                    <li>
                        <Link to={`${url}/customers`}>Кастомери</Link>
                    </li>
                </ul>
            </SideBar>
            <div>
                <div>
                    <Switch>
                        <Route path={`${path}/users`}>
                            <UsersPanel />
                        </Route>
                        <Route path={`${path}/events`}>
                            <EventsPanel />
                        </Route>
                        <Route path={`${path}/groups`}>
                            <GroupsPanel />
                        </Route>
                        <Route path={`${path}/customers`}>
                            <CustomersPanel isPortable={isPortable} />
                        </Route>
                        {/* <Route path={`${path}/app`}>
                            <AppPanel />
                        </Route> */}
                    </Switch>
                </div>
            </div>
        </>
    );
};
