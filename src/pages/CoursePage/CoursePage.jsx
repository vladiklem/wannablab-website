import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";

import { coursesList, usersFeedbackList } from "constants/lists";
import { mediaBreakpointsEnum } from "constants/enums";
import { Button, List } from "components/index";
import { selectGroups } from "store/groups/selectors";
import { Quote } from "components/styled/index";
import { scrollToTop } from "helpers/general";

import styles from "./CoursePage.module.scss";
import { LeadForm } from "components/styled/LeadForm/LeadForm";
import { GroupsScrollableList } from "components/styled/GroupsScrollableList/GroupsScrollableList";
import { MentorsScrollableList } from "components/styled/MentorsScrollableList/MentorsScrollableList";

export const CoursePage = () => {
    const groups = useSelector(selectGroups);
    const { slug } = useParams();
    const course = coursesList.find(({ slug: courseSlug }) => slug === courseSlug);
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <article className="pt-4">
            <section className="mb-5 container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h1 className="h1 mb-2">{course.title}</h1>
                        <img
                            className={cx(styles.coursePage__image, "d-md-none")}
                            src={course.imgSrc}
                            alt={course.description}
                        />
                        <h2 className="regular mb-3">{course.description}</h2>
                        <div className="row flex-nowrap mb-3">
                            <span className="col-6">
                                <Button
                                    className="w-100 text-highlighted py-2 font-weight-bold"
                                    color="blue-soft"
                                >
                                    {isPortable ? "Більше" : "Читати більше"}
                                </Button>
                            </span>
                            <span className="col-6">
                                <Button
                                    className="w-100 text-highlighted py-2 font-weight-bold"
                                    color="purple-soft"
                                    href="#wannablab-lead-form"
                                >
                                    {isPortable ? "Хочу" : "Хочу...дуже :3"}
                                </Button>
                            </span>
                        </div>
                        <div>
                            {slug === "solo-plan" && (
                                <>
                                    <h2 className="h3">Наші ментори</h2>
                                    <MentorsScrollableList />
                                </>
                            )}
                            {(slug === "pro-plan" || slug === "basic-plan") && (
                                <>
                                    <h2 className="h3">Календар груп</h2>
                                    <GroupsScrollableList list={groups} isPortable={isPortable} />
                                </>
                            )}
                        </div>
                        <div className="row">
                            <div className={cx("col-md-6 col-sm-12", { "mb-1": isPortable })}>
                                <span className="font-weight-semibold">Формат:</span> онлайн уроки
                                по Google Meet
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <span className="font-weight-semibold">Ціна:</span>
                                {` ${course.price} грн`}
                            </div>
                        </div>
                    </div>
                    <div className={cx("col-md-6 col-sm-12", { "d-none": isPortable })}>
                        <img
                            className={styles.coursePage__image}
                            src={course.imgSrc}
                            alt={course.description}
                        />
                    </div>
                </div>
            </section>
            <section className="mb-5 container">
                <h2 className="h2 mb-3">Про курс</h2>
                <div className="row mb-5">
                    <div className="col-md-8 col-sm-12">
                        <h3 className="regular">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida
                            neque convallis a. Lobortis feugiat vivamus at augue eget. Sit amet nisl
                            purus in mollis nunc sed. <br /> <br /> Enim blandit volutpat maecenas
                            volutpat blandit aliquam etiam erat. Consequat semper viverra nam libero
                            justo laoreet. Commodo quis imperdiet massa tincidunt. Condimentum
                            lacinia quis vel eros. Sollicitudin nibh sit amet commodo nulla facilisi
                            nullam. Ante in nibh mauris cursus mattis molestie a iaculis at. Viverra
                            ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.{" "}
                            <br /> <br /> Vel facilisis volutpat est velit egestas. Non nisi est sit
                            amet. Lectus proin nibh nisl condimentum id venenatis a condimentum
                            vitae. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim.
                            Posuere sollicitudin aliquam ultrices sagittis. Faucibus scelerisque
                            eleifend donec pretium vulputate. Orci ac auctor augue mauris augue
                            neque gravida in fermentum. Nunc mi ipsum faucibus vitae.
                        </h3>
                    </div>
                </div>
                <Quote
                    src={usersFeedbackList[0].avatar}
                    text={usersFeedbackList[0].description}
                    author={usersFeedbackList[0].name}
                    isPortable={isPortable}
                    className={cx("mb-5", { "w-75": isPortable })}
                />
                <h2 className="h2 mb-3">Ми навчимося</h2>
                <List list={["класно", "комунікувати", "англійською"]} />
            </section>
            <section id="wannablab-lead-form" className="exp-bg full-screen-height">
                <div className="container d-flex flex-column align-items-center">
                    <h2 className="h2 mt-5 mb-5 text-center">
                        Курс пройшли вже <strong>57 людей</strong>
                    </h2>
                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                        <LeadForm />
                    </div>
                </div>
            </section>
        </article>
    );
};
