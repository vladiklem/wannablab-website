import React from "react";
import { Route } from "react-router-dom";

export const CustomRoute = ({ isVisible, children, ...props }) =>
    isVisible ? <Route {...props}>{children}</Route> : null;
