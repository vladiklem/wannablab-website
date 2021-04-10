import React, { useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";

import { Button } from "components/index";
import { mediaBreakpointsEnum } from "constants/enums";

import { LeadForm } from "./components/LeadForm/LeadForm";
import { Stepper } from "./components/Stepper/Stepper";
import { Scrollable, ScrollableItem } from "components/index";

import styles from "./Home.module.scss";

const steps = [
    {
        title: "Тест рівня",
        titleClassName: "text-soft-purple font-weight-bold",
        description: "15-хвилинна розмова на побутову тему з нашим вчителем",
        buttonProps: {
            children: "Записатися",
            color: "success",
            className: "border-circle font-weight-bold bg-soft-purple border-0",
            href: "#blaber-form",
        },
    },
    {
        title: "Індивідуальний план",
        titleClassName: "text-soft-blue font-weight-bold",
        description: "Наше бачення розвитку вашого мовлення на перший місяць навчання.",
        buttonProps: {
            children: "Приклад",
            color: "success",
            className: "border-circle font-weight-bold bg-soft-blue border-0",
            href: "#blaber-form",
        },
    },
    {
        title: "Початок навчання",
        titleClassName: "text-soft-green font-weight-bold",
        description: "Ми підбираємо для вас групу, а ви обираєте план навчання",
        buttonProps: {
            children: "Чекнути ціни",
            color: "success",
            className: "border-circle font-weight-bold bg-soft-green border-0",
            href: "#blaber-form",
        },
    },
];

const items = [
    {
        title: "WB-17",
        schedule: "ПН, СР 19:00",
        membersCount: 3,
    },
    {
        title: "WB-16",
        schedule: "ВТ, ЧТ 19:00",
        membersCount: 3,
    },
    {
        title: "WB-15",
        schedule: "ВТ, ЧТ 18:00",
        membersCount: 3,
    },
];

export const Home = () => {
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const onClick = useCallback(() => window.scrollTo(0, 0), []);

    const onOrderClick = useCallback(() => {
        document.getElementById("blaber-form").scrollIntoView();
        setTimeout(() => document.getElementById("name").focus(), 600);
    }, []);

    return (
        <div className="container mt-4 px-4">
            <section className={cx(styles.firstSection, "d-flex flex-column")}>
                <h2 className={cx(styles.fontSize22, "h2")}>
                    Школа розмовної англійської для реального життя. Цінуємо кожного 😊
                </h2>
                <Button
                    className="font-weight-bold mt-4"
                    color="purple-soft"
                    size="lg"
                    onClick={onOrderClick}
                >
                    Замовити тест рівня
                </Button>
                <Button
                    className="font-weight-bold mt-3"
                    href="https://t.me/emerello"
                    color="blue-soft"
                    size="lg"
                >
                    Написати нам
                </Button>
                <h2 className="h2 mt-5 mb-2">Як працюють блабери?</h2>
                <ul className="features-list">
                    <li>Індивідуальниий підхід до кожного</li>
                    <li>Практика говоріння кожного дня</li>
                    <li>Вчимо з фаном</li>
                </ul>
                <h2 className="h2 mt-5 mb-2">Календар груп</h2>
                <Scrollable>
                    {items.map(({ title, schedule, membersCount }, index) => (
                        <ScrollableItem className={cx("shadow-soft py-2 px-3", {
                            "mr-3": index !== items.length - 1
                        })}>
                            <h3 className="h3 mb-1">{title}</h3>
                            <h3 className="h3 mb-1">{schedule}</h3>
                            <h3 className="h3">{membersCount}</h3>
                        </ScrollableItem>
                    ))}
                </Scrollable>
            </section>
            <div id="blaber-form" className={styles.lastSection}>
                <div className="d-flex justify-content-center mt-3">
                    <LeadForm className={cx(styles.leadForm, "mt-3")} />
                </div>
            </div>
        </div>
    );
};
