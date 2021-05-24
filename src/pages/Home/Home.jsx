import React, { useCallback, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";
import cx from "classnames";

import { GreetingsSection } from "./sections/GreetingsSection/GreetingsSection";
import { InteractionSections } from "./sections/InteractionSections/InteractionSections";
import { FeedbackSection } from "./sections/FeedbackSection/FeedbackSection";
import { LeadForm } from "components/styled/LeadForm/LeadForm";

import { mediaBreakpointsEnum } from "constants/enums";

import styles from "./Home.module.scss";

export const Home = () => {
    const [description, setDescription] = useState("");

    const history = useHistory();
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const onOrderClick = useCallback(() => {
        document.getElementById("blaber-form").scrollIntoView();
        setTimeout(() => document.getElementById("name").focus(), 700);
    }, []);

    const onGroupSelect = useCallback(
        (item) => {
            setDescription(`Ви записуєтесь в группу \n\n "${item.title}" 🎉 `);
            onOrderClick();
        },
        [setDescription, onOrderClick],
    );
    const onMentorSelect = useCallback(
        ({ name }) => {
            setDescription(`Ви записуєтесь на приватні заняття до \n\n "${name}" 🎉 `);
            onOrderClick();
        },
        [setDescription, onOrderClick],
    );

    const toCourse = useCallback((slug) => {
        history.push(`/course/${slug}`)
    }, [history]);

    return (
        <article className="mt-4">
            <GreetingsSection
                onOrderClick={onOrderClick}
                isPortable={isPortable}
                toCourse={toCourse}
            />
            <InteractionSections
                onMentorSelect={onMentorSelect}
                onGroupSelect={onGroupSelect}
            />
            <FeedbackSection isPortable={isPortable} />
            <section id="blaber-form" className={cx("container d-flex flex-column align-items-center", styles.formSection)}>
                <h2 className="h2 font-weight-bold mt-4">Привіт, блабере!</h2>
                <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                    <LeadForm description={description} />
                </div>
            </section>
        </article>
    );
};
