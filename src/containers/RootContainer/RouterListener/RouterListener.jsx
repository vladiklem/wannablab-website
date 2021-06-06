import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { toggleAdminVisibility } from "store/app/actions";

export const RouterListener = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const isAdmin = history.location.pathname.substring(0, 6) === "/admin";
        !isAdmin && dispatch(toggleAdminVisibility(false));
        isAdmin && dispatch(toggleAdminVisibility(true));
    }, [history, dispatch]);

    return null;
};
