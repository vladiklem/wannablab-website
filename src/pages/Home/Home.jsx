import React, { useCallback } from "react";
import cx from "classnames";

import { Button } from "components/index";

import { LeadForm } from "./components/LeadForm/LeadForm";
import { Scrollable, ScrollableItem } from "components/index";

import groupLessonsImg from "assets/images/group-lessons.png";
import personalLessonsImg from "assets/images/personal-lessons.png";
import smallTalkLessonsImg from "assets/images/small-talk.png"

import styles from "./Home.module.scss";

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

const services = [
    {
        slug: "group-lessons",
        title: "Групові уроки",
        description: "Командна робота над мовленням у форматі спікінг клабу",
        imgSrc: groupLessonsImg,
    },
    {
        slug: "personal-lessons",
        title: "Індивідуальні уроки",
        description: "Інтенсивна робота у бажаному напрямку один на один",
        imgSrc: personalLessonsImg,
    },
    {
        slug: "small-talks",
        title: "Small talks",
        description: "Швидка практика на кожен день",
        imgSrc: smallTalkLessonsImg,
    }
];

export const Home = () => {
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
                        <ScrollableItem
                            className={cx("shadow-soft py-2 px-3", {
                                "mr-3": index !== items.length - 1,
                            })}
                        >
                            <h3 className="h3 mb-1">{title}</h3>
                            <h3 className="h3 mb-1">{schedule}</h3>
                            <h3 className="h3">{membersCount}</h3>
                        </ScrollableItem>
                    ))}
                </Scrollable>
                <h2 className="h2 mt-5 mb-2">Що ми пропонуємо?</h2>
                <Scrollable>
                    {services.map(({ title, description, slug, imgSrc }, index) => (
                        <ScrollableItem
                            className={cx("shadow-soft py-2 px-3", {
                                "mr-3": index !== items.length - 1,
                            })}
                            key={slug}
                        >
                            <img
                                className="d-block ml-auto mr-auto"
                                height={150}
                                width={150}
                                src={imgSrc}
                                alt={description}
                            />
                            <h3 className="h3 text-center">{title}</h3>
                        </ScrollableItem>
                    ))}
                </Scrollable>
            </section>
            <div id="blaber-form" className={styles.lastSection}>
                <div className="d-flex justify-content-center pt-5">
                    <LeadForm className={styles.leadForm} />
                </div>
            </div>
        </div>
    );
};
