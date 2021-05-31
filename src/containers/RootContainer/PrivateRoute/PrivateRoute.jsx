import { React } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { Loader } from "components/index";

export const PrivateRoute = ({ component: Component, selector, ...props }) => {
    const { isLoading, isVisible } = useSelector(selector);

    return isLoading ? (
        <Loader />
    ) : (
        <Route {...props}>{isVisible ? <Component /> : <Redirect to="/" />}</Route>
    );
};
