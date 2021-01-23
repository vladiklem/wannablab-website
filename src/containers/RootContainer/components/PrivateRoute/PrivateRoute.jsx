import { React } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...props }) => {
    const { isAdmin } = useSelector((state) => state.general);

    return <Route {...props}>{true ? <Component /> : <Redirect to="/" />}</Route>;
};
