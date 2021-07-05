import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { IMAGES } from "constants/images";
import { toggleHeader } from "store/app/actions";
import { Button, buttonColorEnum } from "components/index";
import { LeadForm } from "components/styled/LeadForm/LeadForm";

import styles from "./ItTeamCoursePage.module.scss";
import { Menu } from "./Menu/Menu";
import { CourseStructure } from "./CourseStructure/CourseStructure";

const translations = {
    ua: {
        h1: "Курс “Англійська комунікації в IT команді”",
        h2_1:
            "Якщо ти давно хотів навчитися ефективно комунікувати в англомовній команді, цей курс саме для тебе.",
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
    const [isActionVisible, setIsActionVisible] = useState(false);

    const onActionClick = useCallback(() => {
        setTimeout(() => {
            document.querySelector("#name").focus();
        }, 750);
    }, []);

    const imgSize = useMemo(() => (isPortable ? 90 : 100), [isPortable]);

    useEffect(() => {
        document.querySelector("#root").classList.add("bg-primary-new");
        dispatch(toggleHeader());

        document.addEventListener("scroll", function () {
            const toTop = document
                .querySelector("#wannablab-it-course-registration")
                .getBoundingClientRect().top;
            setIsActionVisible(toTop <= 500);
        });
    }, [dispatch]);

    return (
        <article
            className={cx("container text-white", { "pt-5": !isPortable, "pt-4": isPortable })}
        >
            <h1 className="h1 mb-2">{translations.ua.h1}</h1>
            <div className="mb-2" style={{ width: "100%", height: 180, backgroundColor: "#fff" }} />
            <h2 className="regular mb-3">{translations.ua.h2_1}</h2>
            <section className="mb-2">
                <h2 className="hidden-element">Менюшечка</h2>
                <Menu />
                {/* <p>Опис мотивації до створення</p> */}
            </section>
            <section id="wannablab-it-who-done" className="pt-5">
                <h2 className="h2 mb-4">Хто зробив курс?</h2>
                <div>
                    <ul className="row">
                        {translations.ua.authorsList.map(
                            ({ role, isBig, name, description, img: { src, alt } }, index) => (
                                <li className="col-md-4 col-12 mt-auto d-flex flex-column align-items-center mb-4">
                                    <img
                                        src={src}
                                        alt={alt}
                                        style={{
                                            width: isBig ? `${imgSize}%` : `${imgSize - 20}%`,
                                        }}
                                        className={cx(
                                            "rounded-circle border-secondary-new image mb-2",
                                            {
                                                "flying-animation": index === 0 && !isPortable,
                                                "flying-fast-animation": index === 1 && !isPortable,
                                                "flying-slow-animation": index === 2 && !isPortable,
                                            },
                                        )}
                                    />
                                    <h3 className="h3 text-center mb-1">{name}</h3>
                                    <h4 className="h4 text-center mb-2">{role}</h4>
                                    <p className="regular">{description}</p>
                                </li>
                            ),
                        )}
                    </ul>
                </div>
            </section>
            <section id="wannablab-it-what-inside" className="pt-5 mb-3">
                <h2 className="h2 mb-4">Яка начинка?</h2>
                <CourseStructure />
            </section>
            <section id="wannablab-it-for-who" className="pt-5 mb-3">
                <h2 className="h2 mb-4">Для кого цей курс?</h2>
                <div>
                    <h3 className="h3">Опис людини якій підійде курс</h3>
                </div>
            </section>
            <section id="wannablab-it-what-after" className="pt-5 mb-3">
                <h2 className="h2 mb-4">Які можливості я отримаю після курсу?</h2>
                <div>
                    <h3 className="h3">Опис можливостей які відкриються після проходження курсу</h3>
                </div>
            </section>
            <section id="wannablab-it-course-registration" className="pt-6 full-screen-height">
                <h2 className="hidden-element">Запис на курс</h2>
                <h3 className="h3 mb-5 text-center font-weight-semibold">
                    Спробуй, не пожалкуєш 😉
                </h3>
                <LeadForm
                    className="text-gray-900"
                    description="Залиш свій контак і Лєра або Влад зателефонують тобі вже сьогодні ввечері 😃"
                    afterWord="Дякуємо, що вирішили займатися з нами ❤️ Чекайте на наш дзвінок після 18-ти вечора."
                    actionButtonProps={{ color: "secondary-new" }}
                />
            </section>

            <Button
                size="lg"
                color={buttonColorEnum.SECONDARY_NEW}
                className={cx("rounded-circle font-weight-bold shadow-soft", styles.actionButton, {
                    [styles.isHidden]: isActionVisible,
                })}
                href="#wannablab-it-course-registration"
                onClick={onActionClick}
            >
                Записатися
            </Button>
        </article>
    );
};
