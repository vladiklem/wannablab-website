import React from "react";
import cx from "classnames";

import { Quote } from "components/styled/index";
import { usersFeedbackList } from "constants/lists";
import { Scrollable, ScrollableItem } from "components/index";

import styles from "./FeedbackSection.module.scss";

export const FeedbackSection = ({ isPortable }) => (
    <section id="wannablab-feedback" className="mb-4 pt-4 container">
        <div>
            <Scrollable
                hasArrows={true}
                isScrollbarVisible={false}
                offset={350}
                containerClassName="mr-n4 ml-n4"
                components={{ Header: <h2 className="h3 font-weight-bold">Відгуки студентів</h2>, }}
            >
                {usersFeedbackList.map((item, index) => (
                    <ScrollableItem
                        className={cx(styles.item, { "mr-4": index < usersFeedbackList.length })}
                    >
                        <Quote
                            src={item.avatar}
                            text={item.description}
                            author={item.name}
                            isPortable={isPortable}
                            key={item.name}
                            className="p-2"
                        />
                    </ScrollableItem>
                ))}
            </Scrollable>
        </div>
    </section>
);
