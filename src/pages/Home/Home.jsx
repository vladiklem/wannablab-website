import React, { useCallback } from "react";
import cx from "classnames";

import { Button } from "components/index";

import { LeadForm } from "./components/LeadForm/LeadForm";
import { Scrollable, ScrollableItem } from "components/index";

import groupLessonsImg from "assets/images/group-lessons.png";
import personalLessonsImg from "assets/images/personal-lessons.png";
import smallTalkLessonsImg from "assets/images/small-talk.png";
import dianaAvatar from "assets/images/diana-avatar.png";

import martaAvatar from "assets/images/marta_avatar.png";

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
    },
];

const mentors = [
    {
        name: "Марта",
        imgSrc: martaAvatar,
    },
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
                    className="font-weight-bold mt-4 text-highlighted"
                    color="purple-soft"
                    size="lg"
                    onClick={onOrderClick}
                >
                    Замовити тест рівня
                </Button>
                <Button
                    className="font-weight-bold mt-3 text-highlighted"
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
                            className={cx("shadow-soft border-radius-20", {
                                "mr-3": index !== items.length - 1,
                            })}
                            contentClassName="py-2 px-3"
                            action={{
                                children: "Деталі",
                                block: true,
                                color: "green-soft",
                                className: "border-radius-20",
                                size: "sm",
                            }}
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
            {/* WIP */}
            {/* <section className="section">
                <h2 className="h2">Наші ментори</h2>
                <Scrollable>
                    {mentors.map(({ name, imgSrc }) => (
                        <ScrollableItem>
                            <img
                                className="d-block border-circle"
                                height={100}
                                width={100}
                                src={imgSrc}
                                alt={name}
                            />
                            <h3 className="h3 text-center">{name}</h3>
                        </ScrollableItem>
                    ))}
                </Scrollable>
            </section> */}
            <section>
                <h2 className="h2 mt-5 mb-2">Марафон від Діани для початківців</h2>
                <div>Тривалість: 45днів</div>
                <img
                    className="d-block border-circle mb-2"
                    height={100}
                    width={100}
                    src={dianaAvatar}
                    alt="Diana's avatar"
                />

                <ul className="features-list">
                    <li>Я розкажу з чого варто починати вивчати іноземну мову</li>
                    <li>Поясню вживання часів, яких усі так бояться</li>
                    <li>Розкажу свої лайфхаки, щоб твоє навчання було легким та цікавим</li>
                    <li>Дам лексику для підтримання діалогу на побутові теми або для подорожей</li>
                    <li>Допоможу подолати мовний бар'єр</li>
                    <li>Змотивую та надам слушні поради</li>
                </ul>

                <h2 className="h2 mt-5 mb-2">Для кого підходить марафон?</h2>

                <ul className="features-list">
                    <li>Для тих, хто колись вивчав англійську, але підзабув, і хоче відновити знання</li>
                    <li>Для тих, хто ще тільки почав вивчати англійську</li>
                    <li>Для тих, хто вирішив вивчати англійську починаючи з сьогодні</li>
                </ul>


                <h2 className="h2 mt-5 mb-2">Пілся прохождення курсу я зможу:</h2>

                <ul className="features-list">
                    <li>Вести діалог із незнайомцем</li>
                    <li>Описувати свій звичайний робочий та вихідний день</li>
                    <li>Розповідати про свої інереси та самопочуття</li>
                    <li>Обговорювати новини</li>
                    <li>Забронювати кімнату у готелі</li>
                    <li>Розповісти про мрії, плани на майбутнє</li>
                    <li>Описати зовнішність інших людей та свою</li>
                    <li>Замовити їжу, враховуючи свої вподобання</li>
                </ul>

                <h2 className="h2 mt-5 mb-2">Що я зрозумію із граматики?</h2>
                <ul className="features-list">
                    <li>Минулий, теперішній та майбутній часи</li>
                    <li>Викорисання артиклів</li>
                    <li>Використання прийменників</li>
                    <li>Множина</li>
                    <li>Побудова питальних речень</li>
                    <li>Модальні дієслова</li>
                </ul>

                <h2  className="h2 mt-5 mb-2"> Домашнє завдання та комунікація</h2>
                
                <ul className="features-list">
                    <li>На тебе чекає 20 відео-уроків із розробленими письмовими та усними вправами</li>
                    <li>Моя підтримка 24/7 у Телеграм</li>
                    <li>Усні завдання допоможуть тобі почати говорити і поставити правильну вимову</li>
                    <li>Письмові завдання і тести доможуть закріпити знання із граматики</li>
                    <li>Перевірка твоїх завдань буде в індивідуальному форматі в переписці зі мною у Телеграм</li>
                    <li>Усне домашнє завдання - твоє говоріння в аудіо-повідомленні Телеграм. Я слухаю, потім коригую вимову, виправляю помилки, якщо такі були у реченні.</li>
                    <li>Стосовно письмового домашнього завдання даю свій фідбек та пояснюю зроблені помилки</li>
                    <li>Завдання зможеш надіслати мені у зручний для себе час протягом 2 наступних днів</li>
                </ul>



            </section>

            <div id="blaber-form" className={styles.lastSection}>
                <div className="d-flex justify-content-center pt-5">
                    <LeadForm className={styles.leadForm} />
                </div>
            </div>
        </div>
    );
};
