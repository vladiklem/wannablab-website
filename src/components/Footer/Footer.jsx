import React from "react";

import { ContactsBlock } from "components/styled/ContactsBlock/ContactsBlock";

export const Footer = () => {
    return (
        <footer className="px-3_5 py-4">
            <h2 className="regular mb-2">powered by <span className="font-weight-semibold">wannablab family</span></h2>
            <ContactsBlock />
        </footer>
    );
};
