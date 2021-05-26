import React from "react";
import { QuoteUpIcon } from "components/Icons/QuoteUpIcon";

import styles from "./Quote.module.scss";

import cx from "classnames";

export const Quote = ({ src, alt, text, author, className, isPortable }) => (
    <div className={cx("row d-flex align-items-center", styles.quote, className)}>
        <div className="col-md-2 col-sm-12">
            <img
                width={118}
                height={118}
                className={cx("image rounded-circle border border-width-2 border-primary-soft", {
                    "mx-2": !isPortable,
                    "mb-2": isPortable,
                })}
                src={src}
                alt={alt}
            />
        </div>
        <div className="col-md-10 col-sm-12 d-flex flex-column position-relative">
            <p className={cx("h3 mb-2 font-weight-normal", styles.quote__text)}>{text}</p>
            <span className="regular font-weight-semibold">{author}</span>
            <QuoteUpIcon width={48} height={48} className={styles.quote__icon} fill="#D7BCF7" />
        </div>
    </div>
);
