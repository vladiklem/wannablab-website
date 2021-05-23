import React from "react";
import cx from "classnames";

import { Instagram, Telegram } from "components/Icons/social";
import { Input } from "components/Input/Input";

export const ContactsBlock = ({ isRow = true }) => (
    <div className="d-flex align-items-center flex-wrap">
        <h2 className="regular mr-3">коннект з нами:</h2>
        <ul className={cx("exp-list d-flex flex-wrap", { "flex-column": !isRow })}>
            <li className="mr-4">
                <a href="https://www.instagram.com/eng.wannablab/">
                    <Instagram height={24} width={24} /> instagram
                </a>
            </li>
            <li className="mr-4">
                <a href="https://t.me/eng_wannablab">
                    <Telegram height={24} width={24} /> telegram
                </a>
            </li>
            <li className="mr-4">phone: +38 (098) 286 4800</li>
        </ul>
        <div>
            <p className="mr-2">Підписатися на e-mail розсилку</p>
            <Input alternative />
        </div>
    </div>
);
