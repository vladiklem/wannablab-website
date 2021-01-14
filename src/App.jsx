import React from "react";
import { Provider } from "react-redux";

import { RootContainer } from "containers/RootContainer/RootContainer";
import { store } from "store";

import "assets/styles/index.scss";

export const App = () => (
    <Provider store={store}>
        <RootContainer />
    </Provider>
);
