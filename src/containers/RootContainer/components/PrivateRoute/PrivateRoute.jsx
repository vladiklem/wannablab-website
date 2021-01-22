import { React } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...props }) => {
    const { isAdmin } = useSelector((state) => state.general);
    console.log(isAdmin);
    console.log("dfhgf");

    return <Route {...props}>{isAdmin ? <Component /> : <Redirect to="/" />}</Route>;
};
