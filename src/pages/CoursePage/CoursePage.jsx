import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";

import { coursesList, usersFeedbackList } from "constants/lists";
import { mediaBreakpointsEnum } from "constants/enums";
import { Button, Scrollable, List, Loader } from "components/index";
import { selectGroups } from "store/groups/selectors";
import { GroupScrollableItem, Quote } from "components/styled/index";

import styles from "./CoursePage.module.scss";
import { LeadForm } from "components/styled/LeadForm/LeadForm";

export const CoursePage = () => {
    const groups = useSelector(selectGroups);
    const { slug } = useParams();
    const course = coursesList.find(({ slug: courseSlug }) => slug === courseSlug);
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    return (
        <article className="pt-4">
            <section className="mb-5 container">
                <div className="row">
                    <div className="col-md-6 colsm-12">
                        <h1 className="h1 mb-2">{course.title}</h1>
                        <h2 className="regular mb-3">{course.description}</h2>
                        <div className="row flex-nowrap mb-3">
                            <span className="col-6">
                                <Button
                                    className="w-100 text-highlighted font-weight-semibold py-2"
                                    color="blue-soft"
                                >
                                    Читати більше
                                </Button>
                            </span>
                            <span className="col-6">
                                <Button
                                    className="w-100 text-highlighted font-weight-semibold py-2"
                                    color="purple-soft"
                                    href="#wannablab-lead-form"
                                >
                                    Хочу
                                </Button>
                            </span>
                        </div>
                        <div>
                            <h2 className="h3">Календар груп</h2>
                            {groups.length ? (
                                <Scrollable className={cx("mt-n2 mb-2", styles.coursePage__groups)}>
                                    {groups.map((item, index, array) => (
                                        <GroupScrollableItem
                                            index={index}
                                            array={array}
                                            item={item}
                                        />
                                    ))}
                                </Scrollable>
                            ) : (
                                <Loader color="purple-soft" />
                            )}
                        </div>
                        <div className="row">
                            <div className={cx("col-md-6 col-sm-12", { "mb-1": isPortable })}>
                                <span className="font-weight-semibold">Формат:</span> онлайн уроки
                                по Google Meet
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <span className="font-weight-semibold">Ціна:</span> 1190 грн
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
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
                    className="mb-5"
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
