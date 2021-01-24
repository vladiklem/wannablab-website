import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import cx from "classnames";

import { SideBar } from "components/index";

import { EventsPanel } from "./panels/EventsPanel/EventsPanel";
import { UsersPanel } from "./panels/UsersPanel/UsersPanel";
import { GroupsPanel } from "./panels/GroupsPanel/GroupsPanel";
import { GeneralPanel } from "./panels/GeneralPanel/GeneralPanel";

export const AdminPage = () => {
    const { withTopBar, withSideBar } = useSelector(state => state.general);
    const { url, path } = useRouteMatch();

    return (
        <>
            <SideBar title="wannablab" isOpen={true}>
                <ul>
                    <li>
                        <Link to={`${url}/users`}>Блабери</Link>
                    </li>
                    <li>
                        <Link to={`${url}/events`}>Івенти</Link>
                    </li>
                    <li>
                        <Link to={`${url}/groups`}>Групи</Link>
                    </li>
                    <li>
                        <Link to={`${url}/general`}>Налаштування</Link>
                    </li>
                </ul>
            </SideBar>
            <div className={cx({
                "container-with-side-bar": withSideBar,
            })}>
                <div className="pl-4">
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
                        <Route path={`${path}/general`}>
                            <GeneralPanel />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
};
