import React from "react";
import cx from "classnames";

import { FeedbackCard } from "components/styled/index";
import { usersFeedbackList } from "constants/lists";

export const FeedbackSection = () => (
    <section>
        <h2 className="h2 mb-3">Наші студенти про нас</h2>
        <div className="d-flex flex-column">
            {usersFeedbackList.map((item, index) => (
                <FeedbackCard
                    {...item}
                    key={item.alt}
                    className={cx({ "mb-3": usersFeedbackList.length - 1 === index })}
                />
            ))}
        </div>
    </section>
);
