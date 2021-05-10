import React, { useCallback, useState } from "react";
import { useSelector } from 'react-redux';

import { GreetingsSection } from "./sections/GreetingsSection/GreetingsSection";
import { InteractionSection } from "./sections/InteractionSection/InteractionSection";
import { FeedbackSection } from './sections/FeedbackSection/FeedbackSection';
import { LeadForm } from "./components/LeadForm/LeadForm";

import { selectGroups } from "store/groups/selectors";

import styles from "./Home.module.scss";

export const Home = () => {
    const [description, setDescription] = useState("");
    const groups = useSelector(selectGroups);
    const onOrderClick = useCallback(() => {
        document.getElementById("blaber-form").scrollIntoView();
        setTimeout(() => document.getElementById("name").focus(), 600);
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

    console.log(groups);

    return (
        <article className="container mt-4 px-4">
            <GreetingsSection onOrderClick={onOrderClick} />
            <InteractionSection groups={groups} onMentorSelect={onMentorSelect} onGroupSelect={onGroupSelect} />
            <FeedbackSection />
            <section id="blaber-form" className={styles.lastSection}>
                <div className="d-flex justify-content-center pt-5">
                    <LeadForm className={styles.leadForm} description={description} />
                </div>
            </section>
        </article>
    );
};
