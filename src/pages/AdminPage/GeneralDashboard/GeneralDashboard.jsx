import React from "react";
import { useSelector } from "react-redux";

import { selectUsers } from "store/users/selectors";
import { selectInstagramInfo, selectTelegramInfo } from "store/app/selectors";
import { usersFeedbackList } from "constants/lists";
import { Button } from "components/index";

import { ProgressItem } from "./ProgressItem/ProgressItem";

export const GeneralDashboard = ({ isPortable }) => {
    const blabers = useSelector(selectUsers);
    const telegram = useSelector(selectTelegramInfo);
    const instagram = useSelector(selectInstagramInfo);

    const activeUsersGoal = 75;
    const feedbackGoal = 25;
    const instagramGoal = 2000;
    const telegramGoal = 1000;

    return (
        <article className="container">
            <section className="mb-5">
                <h2 className="h2 mb-4">Цілі</h2>
                <ProgressItem
                    current={blabers.length}
                    goal={activeUsersGoal}
                    isPortable={isPortable}
                    className="mb-3"
                >
                    Кількість активних клієнтів <strong>до 1 вересня</strong>
                </ProgressItem>
                <ProgressItem
                    current={usersFeedbackList.length}
                    goal={feedbackGoal}
                    isPortable={isPortable}
                    className="mb-3"
                >
                    Кількість відгуків <strong>до 1 вересня</strong>
                </ProgressItem>
                <ProgressItem
                    current={instagram.count}
                    goal={instagramGoal}
                    isPortable={isPortable}
                    className="mb-3"
                >
                    Ціль по підписникам в інстаграмі <strong>до 1 серпня</strong>
                </ProgressItem>
                <ProgressItem current={telegram.count} goal={telegramGoal} isPortable={isPortable}>
                    Ціль по підписникам в телеграмі <strong>до 1 серпня</strong>
                </ProgressItem>
            </section>
            <section>
                <h2 className="h2 mb-4">Проблеми</h2>
                <Button color="primary-new" outline>Відрепортити</Button>
            </section>
        </article>
    );
};
