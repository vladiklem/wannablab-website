import React from "react";
import cx from "classnames";

import { Instagram, Telegram } from "components/Icons/social";
import { EmailNewsForm } from "forms/EmailNewsForm/EmailNewsForm";

export const ContactsBlock = ({ isRow = true }) => (
    <div className="d-flex flex-column">
        <h1 className="hidden-element">Контакти</h1>
        <p className="regular mb-1">коннект з нами:</p>
        <ul className={cx("d-flex flex-wrap mb-3", { "flex-column": !isRow })}>
            <li className="mr-4 mb-1">
                <a href="https://www.instagram.com/eng.wannablab/">
                    <Instagram height={20} width={20} /> instagram
                </a>
            </li>
            <li className="mr-4 mb-1">
                <a href="https://t.me/eng_wannablab">
                    <Telegram height={24} width={24} /> telegram
                </a>
            </li>
            <li className="mr-4 mb-1">
                <a href="tel:380982864800">
                    <h2 className="regular">
                        <span className="text-decoration-none text-gray-900">тел:</span> +38 (098) 286 4800
                    </h2>
                </a>
            </li>
            <li className="mr-4 mb-1">
                <a href="mailto:wannablab.eng@gmail.com">
                    <h2 className="regular">
                        <span className="text-decoration-none text-gray-900">mail:</span> wannablab.eng@gmail.com
                    </h2>
                </a>
            </li>
        </ul>
        <EmailNewsForm />
    </div>
);
