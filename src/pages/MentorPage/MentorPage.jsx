import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import cx from "classnames";

import { mentorsList } from "constants/lists";
import { mediaBreakpointsEnum } from "constants/enums";
import { Button, List, Loader } from "components/index";
import { scrollToTop } from "helpers/general";

import { LeadForm } from "components/styled/LeadForm/LeadForm";
import { GroupsScrollableList } from "components/styled/GroupsScrollableList/GroupsScrollableList";
import { selectGroups } from "store/groups/selectors";

export const MentorPage = () => {
    const { slug } = useParams();
    const groups = useSelector(selectGroups);
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const mentor = mentorsList.find(({ slug: courseSlug }) => slug === courseSlug);

    const onOrderClick = useCallback(() => {
        document.getElementById("wannablab-lead-form").scrollIntoView();
        setTimeout(() => document.getElementById("name").focus(), 750);
    }, []);

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <article className="pt-4">
            <section className="mb-4 container">
                <div className="row">
                    <div className={cx("col-md-6 col-sm-12 d-none", { "d-block": isPortable })}>
                        <img
                            className="image rounded-xl mb-2 shadow-soft"
                            src={mentor.src}
                            alt={mentor.description}
                        />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h1 className="h1 mb-2">{mentor.name}</h1>
                        <h2 className="regular mb-3">{mentor.description}</h2>
                        <div className="row flex-nowrap mb-4">
                            <span className="col-6">
                                <Button
                                    className="w-100 font-weight-bold py-2"
                                    color="primary-new"
                                    href="#wannablab-teacher-description"
                                    outline
                                >
                                    {isPortable ? "Більше" : "Читати більше"}
                                </Button>
                            </span>
                            <span className="col-6">
                                <Button
                                    className="w-100 font-weight-bold py-2"
                                    color="primary-new"
                                    href="#wannablab-lead-form"
                                    onClick={onOrderClick}
                                >
                                    Записатися
                                </Button>
                            </span>
                        </div>
                        {groups.length ? (
                            <>
                                <GroupsScrollableList isPortable={isPortable} list={groups} />
                            </>
                        ) : (
                            <Loader />
                        )}
                        <div>
                            <List list={mentor.list} />
                        </div>
                    </div>
                    <div className={cx("col-md-6 col-sm-12", { "d-none": isPortable })}>
                        <img
                            className="image rounded-xl shadow-soft"
                            src={mentor.src}
                            alt={mentor.description}
                        />
                    </div>
                </div>
            </section>
            <section className="pt-4 container" id="wannablab-teacher-description">
                <h2 className="h2 mb-3">Про Ментора</h2>
                <div className="row mb-5">
                    <div className="col-md-8 col-sm-12">
                        <p className="regular">
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
                        </p>
                    </div>
                </div>
            </section>
            <section id="wannablab-lead-form" className="full-screen-height bg-primary-new-75">
                <div className="container d-flex flex-column align-items-center">
                    <h2 className="hidden-element">
                        Форма для запису на курс англійської мови від школи розмовної англійської
                        wannablab
                    </h2>
                    <h3 className="h2 mt-5 mb-5 text-center text-white">
                        Курс пройшли вже <strong>57 людей</strong>
                    </h3>
                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                        <LeadForm />
                    </div>
                </div>
            </section>
        </article>
    );
};
