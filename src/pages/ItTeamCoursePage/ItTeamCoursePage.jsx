import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { IMAGES } from "constants/images";
import { toggleHeader } from "store/app/actions";
import { LeadForm } from "components/styled/LeadForm/LeadForm";

import styles from "./ItTeamCoursePage.module.scss";
import { GeneralInfoBanner } from "./GeneralInfoBanner/GeneralInfoBanner";
import { DetailedInfo } from "./DetailedInfo/DetailedInfo";

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

export const ItTeamCoursePage = ({ isPortable }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleHeader());
    }, [dispatch]);

    return (
        <article className={cx({ "pt-5": !isPortable, "pt-4": isPortable })}>
            <section className="mb-5">
                <h1 className={cx("container", { "h1 lh-44": isPortable, h0: !isPortable })}>
                    {translations.ua.h1}
                </h1>
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
                            <DetailedInfo translations={translations} isPortable={isPortable} />
                        </div>
                        <div className="col-12 col-md-5">
                            <GeneralInfoBanner
                                className={cx({ [cx(styles.panel, "mt-5")]: !isPortable })}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {isPortable && (
                <section className="container">
                    <DetailedInfo translations={translations} isPortable={isPortable} />
                </section>
            )}
            <section
                id="wannablab-it-course-registration"
                className="py-5 mb-5 full-screen-height container d-flex flex-column align-items-center"
            >
                <h2 className="h0 mb-4">Запис на курс</h2>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="col-6">
                        <img
                            className="image"
                            src={IMAGES.itHero}
                            alt="IT English communication hero"
                        />
                    </div>
                </div>
                <LeadForm
                    className="text-gray-900 align-self-start"
                    description="Залиш свій контак і Лєра або Влад зателефонують тобі вже сьогодні ввечері 😃"
                    afterWord="Дякуємо, що вирішили займатися з нами ❤️ Чекайте на наш дзвінок після 18-ти вечора."
                />
            </section>
        </article>
    );
};
