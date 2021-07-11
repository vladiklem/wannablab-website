import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";

import { ModalsContainer } from "containers/ModalsContainer/ModalsContainer";
import { Home } from "pages/Home/Home";
import { AdminPage } from "pages/AdminPage/AdminPage";
import { ChecklistPage } from "pages/ChecklistPage/ChecklistPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import { CoursePage } from "pages/CoursePage/CoursePage";
import { MentorPage } from "pages/MentorPage/MentorPage";
import { QuizPage } from "pages/QuizPage/QuizPage";
import { TestPage } from "pages/TestPage/TestPage";
import { Header, Footer } from "components/index";
import { firebaseService } from "services/firebaseService";
import { initUsers } from "store/users/actions";
import { initEvents } from "store/events/actions";
import { initGroups } from "store/groups/actions";
import { changeLanguage, initApp } from "store/app/actions";
import { selectAdmin, selectHeaderSettings, selectLanguage } from "store/app/selectors";
import { toggleModal } from "store/modals/actions";
import { modalNamesEnum, mediaBreakpointsEnum } from "constants/enums";
import { IMAGES } from "constants/images";

import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

import styles from "./RootContainer.module.scss";
import "assets/styles/index.scss";
import { initLeads } from "store/leads/actions";
import { ItTeamCoursePage } from "pages/ItTeamCoursePage/ItTeamCoursePage";

firebaseService.init();

const translations = {
    ua: {
        itIntroSection: {
            h1: "Курс “English communication in team”",
            img: {
                src: IMAGES.itCover,
                alt:
                    "Командна робота в IT компанії. Командная работа в IT компании. Корпоративный английский.",
            },
        },
        itRegistrationSection: {
            h2: "Запис на курс",
            img: {
                src: IMAGES.itHero,
                alt: "IT English communication hero",
            },
            form: {
                description:
                    "Залиш свій контак і Лєра або Влад зателефонують тобі вже сьогодні ввечері 😃",
                afterWord:
                    "Дякуємо, що вирішили займатися з нами ❤️ Чекайте на наш дзвінок після 18-ти вечора.",
            },
        },
        itDetailedInfoSection: {
            h2_1: "Про Курс",
            h2_2: "Програма Курсу",
            h3_1: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.`,
            h2_3: "Автори Курсу",
            h2_4: "Після Курсу Ти Навчишся:",
            authorsList: [
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
                    name: "Влад Балюк",
                    role: "Організатор Курсів",
                    description: "Здоровки, я також відповідаю за організацію курсу.",
                    img: {
                        src: IMAGES.vladItAvatar,
                        alt: "Влад Балюк - організатор курсу 'Англійська комунікація в IT команді'",
                    },
                },
            ],
            valuesList: [
                {
                    title: "Soft skills",
                    description:
                        "Критичне мислення, швидке прийняття рішення, вирішення проблем, інтеракції в команді, лідерство, трудова етика -- це те, що зараз є необхідним у будь-якій професії. Особливо, якщо ти лише починаєш свій професійний розвиток.",
                },
                {
                    title: "Далі без овертаймів",
                    description:
                        "Овертайми (в більшості випадків)  --  це наслідок неправильного менеджменту свого робочого часу та нестача знань, як потрібно комунікувати з тім лідом чи менеджером. ",
                },
                {
                    title: "Навчання в команді",
                    description:
                        "Зараз ти працюєш web-розробником, а далі захочеш перейти в команду продажів чи маркетингу. Це гарна ідея, але для цього потрібно вміти спілкуватися із різними учасниками команди і бути завжди up-to-date зі всім, що відбувається.",
                },
                {
                    title: "Критика -- це добре",
                    description:
                        "До конструктивної критики європейські замовники і члени команди завжди дослуховуються. І критика в твою сторону теж буде часто. Але не потрібно сюди додавати емоції, якщо твоя точка зору вірна, то ти зможеш її донести, як спеціаліст.",
                },
            ],
        },
    },
};

const detectLang = () => "ua";
// ["ua", "ru"].includes(window.navigator.language.toLowerCase())
//     ? window.navigator.language
//     : "ua";

export const RootContainer = () => {
    const dispatch = useDispatch();
    const admin = useSelector(selectAdmin);
    const headerSettings = useSelector(selectHeaderSettings);
    const lang = useSelector(selectLanguage);
    const [coursesClicked, setCoursesClicked] = useState(false);
    const [pricesClicked, setPricesClicked] = useState(false);

    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const openLoginModal = useCallback(() => dispatch(toggleModal(modalNamesEnum.LOGIN)), [
        dispatch,
    ]);

    console.log(lang);

    const strings = useMemo(() => translations[lang], [lang]);

    const onCoursesClick = useCallback(() => {
        setTimeout(() => {
            setCoursesClicked(true);
        }, 300);
        setTimeout(() => {
            setCoursesClicked(false);
        }, 1260);
    }, []);

    const onPricesClick = () => {
        setPricesClicked(true);
        setTimeout(() => {
            setPricesClicked(false);
        }, 560);
    };

    const renderRoute = useCallback(
        ({ routeComponent: Component, props: outerProps }) => (props) => (
            <Component {...props} {...outerProps} />
        ),
        [],
    );

    useEffect(() => {
        dispatch(initUsers());
        dispatch(initEvents());
        dispatch(initGroups());
        dispatch(initApp());
        dispatch(initLeads());
        dispatch(changeLanguage(detectLang()));
    }, [dispatch]);

    return (
        <Router>
            <Header
                isPortable={isPortable}
                onCoursesClick={onCoursesClick}
                onPricesClick={onPricesClick}
                isVisible={headerSettings.isVisible}
            />
            <main
                className={cx(styles.background, {
                    "list-scale-animation1": coursesClicked,
                    "list-scale-animation2": pricesClicked,
                })}
            >
                <ModalsContainer />
                <Switch>
                    <Route path="/" render={renderRoute({ routeComponent: Home })} exact />
                    <Route
                        path="/course/:slug"
                        render={renderRoute({ routeComponent: CoursePage })}
                    />
                    <Route
                        path="/mentor/:slug"
                        render={renderRoute({ routeComponent: MentorPage })}
                    />
                    <Route
                        path="/check-list"
                        render={renderRoute({ routeComponent: ChecklistPage })}
                    />
                    <Route
                        path="/it"
                        render={renderRoute({
                            routeComponent: ItTeamCoursePage,
                            props: { isPortable, strings },
                        })}
                    />
                    <Route path="/test" render={renderRoute({ routeComponent: TestPage })} />
                    <Route path="/quiz/:slug" render={renderRoute({ routeComponent: QuizPage })} />
                    <PrivateRoute
                        path="/admin"
                        isLoading={admin.isLoading}
                        hasAccess={admin.isAdmin}
                        component={AdminPage}
                        selector={selectAdmin}
                    />
                    <Route component={NotFoundPage} />
                </Switch>
            </main>
            <Footer handleLogin={openLoginModal} isPortable={isPortable} />
        </Router>
    );
};
