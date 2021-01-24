import { combineReducers } from "redux";

import { usersReducer } from "./users/reducer";
import { eventsReducer } from "./events/reducer";
import { groupsReducer } from "./groups/reducer";
import { leadsReducer } from "./leads/reducer";
import { generalReducer } from "./general/reducer";
import { currentUserReducer } from "./currentUser/reducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer,
    groups: groupsReducer,
    leads: leadsReducer,
    general: generalReducer,
    currentUser: currentUserReducer,
});
