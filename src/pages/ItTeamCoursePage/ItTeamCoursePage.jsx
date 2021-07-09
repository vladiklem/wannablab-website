import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { IMAGES } from "constants/images";
import { toggleHeader } from "store/app/actions";
import { Button, buttonColorEnum, Scrollable, ScrollableItem } from "components/index";
import { LeadForm } from "components/styled/LeadForm/LeadForm";

import styles from "./ItTeamCoursePage.module.scss";
import { Menu } from "./Menu/Menu";
import { CourseStructure } from "./CourseStructure/CourseStructure";
import { GeneralInfoBanner } from "./GeneralInfoBanner/GeneralInfoBanner";

const translations = {
    ua: {
        h1: "Курс “English communication in team”",
        h2_1: "Про Курс",
        h2_2: "Програма Курсу",
        authorsList: [
            {
                name: "Лєра Михальова",
                role: "Організатор Курсів",
                description:
                    "Привіт, я відповідаю за ваші найкращі враження від організації курсу.",
                img: {
                    src: IMAGES.leraItAvatar,
                    alt:
                        "Велерія Михальова - організатор курсу 'Англійська комунікація в IT команді'",
                },
            },
            {
                name: "Марта Ярош",
                role: "Автор та Вчитель курсу",
                description:
                    "Хая, я відповідаю за якість вашої англійської після проходження курсу.",
                img: {
                    src: IMAGES.martaItAvatar,
                    alt:
                        "Марта Ярош - головний вчитель, автор програми курсу 'Англійська комунікація в IT команді'",
                },
                isBig: true,
            },
            {
                name: "Влад Балюк",
                role: "Організатор Курсів",
                description: "Здоровки, я також відповідаю за організацію курсу.",
                img: {
                    src: IMAGES.vladItAvatar,
                    alt: "Влад Балюк - організатор курсу 'Англійська комунікація в IT команді'",
                },
            },
        ],
    },
};

const authors = [
    {
        slug: "marta-yarosh",
        name: "Марта Ярош",
        src: IMAGES.martaAvatar,
        list: ["IELTS (7.5 CERF C1)", "50+ успішних студентів"],
        color: "light-green",
        shortDescription: "Вчитель англійської мови для дорослих починаючи від рівня А2 до С1.",
        longDescription:
            'Знання підтверджені міжнародним сертифікатом IELTS (7.5 CERF C1) \nЗа рік роботи вчителем у wannablab допомогла більше 30 студентам позбавитися мовного бар\'єру та перестати нарешті говорити "I am agree". \n Маю досвід в підготовці студентів до таких екзаменів як ЄВІ, ЗНО, IELTS.',
        instaHref: "https://www.instagram.com/p/CKQ3toJnQRk/",
    },
];

export const ItTeamCoursePage = ({ isPortable }) => {
    const dispatch = useDispatch();

    const imgSize = useMemo(() => (isPortable ? 90 : 100), [isPortable]);

    useEffect(() => {
        dispatch(toggleHeader());
    }, [dispatch]);

    return (
        <article className={cx({ "pt-5": !isPortable, "pt-4": isPortable })}>
            {/* <h1 className="h1 mb-2">{translations.ua.h1}</h1> */}
            <section className="mb-5">
                <h1 className="h1 lh-44 container">{translations.ua.h1}</h1>
                <div className="d-md-none">
                    <img
                        alt="Командна робота в IT компанії. Командная работа в IT компании. Корпоративный английский."
                        src={IMAGES.itCover}
                        className="image mb-2"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 d-none d-md-block">
                            <img
                                alt="Командна робота в IT компанії. Командная работа в IT компании. Корпоративный английский."
                                src={IMAGES.itCover}
                                className="image mb-2"
                            />
                            <h2 className="h0 mb-4">{translations.ua.h2_1}</h2>
                            <h3 className="font-weight-normal h2-28 mb-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.
                            </h3>
                            <h2 className="h0 mb-4">{translations.ua.h2_2}</h2>
                            <CourseStructure />
                        </div>
                        <div className="col-12 col-md-5">
                            <GeneralInfoBanner className={cx({ [styles.panel]: !isPortable })} />
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="wannablab-it-course-registration"
                className="pt-6 full-screen-height container d-flex align-items-center justify-content-center"
            >
                <h2 className="hidden-element">Запис на курс</h2>
                <LeadForm
                    className="text-gray-900"
                    description="Залиш свій контак і Лєра або Влад зателефонують тобі вже сьогодні ввечері 😃"
                    afterWord="Дякуємо, що вирішили займатися з нами ❤️ Чекайте на наш дзвінок після 18-ти вечора."
                    actionButtonProps={{ color: "secondary-new" }}
                />
            </section>
        </article>
    );
};
