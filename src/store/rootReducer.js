import { combineReducers } from "redux";

import { usersReducer } from "./users/reducer";
import { eventsReducer } from "./events/reducer";
import { groupsReducer } from "./groups/reducer";
import { leadsReducer } from "./leads/reducer";
import { appReducer } from "./app/reducer";
import { currentUserReducer } from "./currentUser/reducer";
import { modalsReducer } from "./modals/reducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer,
    groups: groupsReducer,
    leads: leadsReducer,
    app: appReducer,
    currentUser: currentUserReducer,
    modals: modalsReducer,
});
