import React from "react";
import cx from "classnames";

import { ContactsBlock } from "components/styled/ContactsBlock/ContactsBlock";

import logo from "assets/images/logo.png";

import styles from "./Footer.module.scss";

export const Footer = ({ isPortable }) => {
    return (
        <footer
            className={styles.footer}
            id="wannablab-footer"
        >
            <div
                className={cx("d-flex px-4 pt-3_5 pb-5 container", {
                    "flex-column": isPortable,
                    "flex-wrap": !isPortable,
                })}
            >
                <div className="row align-items-center mb-3 no-gutters w-100">
                    <img className="mr-3" src={logo} width="50" height="60" alt="wannablab logo" />
                    <p className="regular">
                        powered by <br />{" "}
                        <span className="font-weight-semibold">wannablab family</span>
                    </p>
                </div>
                <ContactsBlock />
            </div>
        </footer>
    );
};
