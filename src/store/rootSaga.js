import { all } from "redux-saga/effects";

import { usersSaga } from "./users/saga";
import { eventsSaga } from "./events/saga";
import { groupsSaga } from "./groups/saga";
import { leadsSaga } from "./leads/saga";
import { generalSaga } from "./general/saga";
import { currentUserSaga } from "./currentUser/saga";

export const rootSaga = function* () {
    yield all([
        ...usersSaga,
        ...eventsSaga,
        ...groupsSaga,
        ...leadsSaga,
        ...generalSaga,
        ...currentUserSaga,
    ]);
};
