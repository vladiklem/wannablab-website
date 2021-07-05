import React, { useMemo } from "react";

import { usersFeedbackList } from "constants/lists";
import { Scrollable } from "components/index";

import { FeedbackScrollableItem } from "./FeedbackScrollableItem/FeedbackScrollableItem";

export const FeedbackSection = ({ isPortable }) => {
    const offset = useMemo(() => (isPortable ? 390 : 1416), [isPortable]);

    return (
        <section id="wannablab-feedback" className="mb-4 pt-4 container">
            <div>
                <Scrollable
                    hasArrows={true}
                    isScrollbarVisible={false}
                    offset={offset}
                    containerClassName="mr-n4 ml-n4"
                    components={{
                        Header: <h2 className="h2-responsive font-weight-bold">Відгуки студентів</h2>,
                    }}
                >
                    {usersFeedbackList.map((item, index) => (
                        <FeedbackScrollableItem
                            index={index}
                            isPortable={isPortable}
                            length={usersFeedbackList.length}
                            {...item}
                        />
                    ))}
                </Scrollable>
            </div>
        </section>
    );
};
