import React, { useCallback, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";

import { GreetingsSection } from "./sections/GreetingsSection/GreetingsSection";
import { InteractionSections } from "./sections/InteractionSections/InteractionSections";
import { FeedbackSection } from "./sections/FeedbackSection/FeedbackSection";
import { LeadForm } from "components/styled/LeadForm/LeadForm";

import { mediaBreakpointsEnum } from "constants/enums";

import { fireAnalyticsEvent } from "analytics"
import events from 'analytics/events'

export const Home = () => {
    const [description, setDescription] = useState("");

    const history = useHistory();
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const onContactTelegramClick = () => {
        fireAnalyticsEvent(events.CONTACT_US_TELEGRAM)
    };


    const onOrderClick = useCallback(() => {
        document.getElementById("wannablab-lead-form").scrollIntoView();

        fireAnalyticsEvent(events.CALL_LATER)
        setTimeout(() => document.getElementById("name").focus(), 750);
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
            fireAnalyticsEvent(events.CALL_LATER)
            onOrderClick();
        },
        [setDescription, onOrderClick],
    );

    const toCourse = useCallback(
        (slug) => {
            history.push(`/course/${slug}`);
            fireAnalyticsEvent(events.READ_MORE_ABOUT_COURSE, slug)
        },
        [history],
    );

    const toMentor = useCallback(
        (slug) => {
            history.push(`/mentor/${slug}`);
            fireAnalyticsEvent(events.READ_MORE_ABOUT_TEACHER, slug)
        },
        [history],
    );

    return (
        <article className="mt-4">
            <h1 className="hidden-element">
                Навчаємо розмовній англійській онлайн для професійних цілей. Професійна англійська,
                англійська для IT, практика, speaking club. Учить английский, разговорный
                английский, практика английского языка.
            </h1>
            <GreetingsSection
                onOrderClick={onOrderClick}
                isPortable={isPortable}
                toCourse={toCourse}
            />
            <InteractionSections
                toMentor={toMentor}
                onMentorSelect={onMentorSelect}
                onGroupSelect={onGroupSelect}
                isPortable={isPortable}
            />
            <FeedbackSection isPortable={isPortable} />
            <section id="wannablab-lead-form" className="full-screen-height bg-primary-new-75">
                <div className="container d-flex flex-column align-items-center">
                    <h2 className="h2 mt-5 mb-5 text-center text-white text-highlighted">
                        Вже <strong>44 людини</strong> вивчили англійську з нами
                    </h2>
                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                        <LeadForm description={description} />
                    </div>
                </div>
            </section>
        </article>
    );
};
