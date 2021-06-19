import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { toggleAdminVisibility } from "store/app/actions";

export const RouterListener = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const isAdminOpened = history.location.pathname.substring(0, 6) === "/admin";
        !isAdminOpened && dispatch(toggleAdminVisibility(false));
        isAdminOpened && dispatch(toggleAdminVisibility(true));
    }, [history.location.pathname, dispatch]);

    return null;
};
