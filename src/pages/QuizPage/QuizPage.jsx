import React, { useCallback, useEffect, useMemo } from "react";
import cx from "classnames";

import { Input, inputTypeEnum, Radio } from "components/index";

import styles from "./QuizPage.module.scss";
import { useHistory, useParams } from "react-router";

import { QuizForm } from "./QuizForm/QuizForm";
import { useDispatch } from "react-redux";
import { addLead } from "store/leads/actions";

import { fireAnalyticsEvent } from "analytics"
import events from 'analytics/events'


const steps = {
    lead: [
        {
            type: "radio",
            name: "proffesion",
            component: Radio,
            description: "В якій сфері розвиваєшся зараз?",
            commonProps: {
                name: "profession",
            },
            list: [
                { value: "it", children: "IT" },
                { value: "marketing", children: "Маркетинг" },
                { value: "management", children: "Менеджмент" },
                { value: "medicine", children: "Медицина" },
                { value: "other", children: "Інше" },
            ],
        },
        {
            type: "radio",
            name: "level",
            component: Radio,
            description: "Як оцінюєш свій рівень англійської?",
            commonProps: {
                name: "level",
            },
            list: [
                { value: "elementary", children: "Початковий" },
                { value: "intermediate", children: "Середній" },
                { value: "advanced", children: "Просунутий" },
            ],
        },
        {
            type: "radio",
            name: "problems",
            component: Radio,
            description: "Проблеми, які виникають у мене при вивченні англійської:",
            commonProps: {
                name: "problems",
            },
            list: [
                {
                    value: "words-translation",
                    children: "Будую речення англійською, перекладаючи слова в голові",
                },
                { value: "grammer", children: "У мене виникають проблеми з граматикою" },
                {
                    value: "hardly-switch",
                    children: "Важко одразу переключитись з рідної мови на англійську",
                },
            ],
        },
        {
            type: "radio",
            name: "evolution",
            component: Radio,
            description: "Над чим бужемо працювати?",
            commonProps: {
                name: "evolution",
            },

            list: [
                { value: "speaking", children: "Хочу вільно розмовляти" },
                { value: "vocabulary", children: "Збільшити словарний запас" },
                { value: "not-afraid-talking", children: "Хочу не боятись говорити" },
                {
                    value: "proffesional-communication",
                    children: "Покрищити професійну комунікацію",
                },
            ],
        },
        {
            type: "input",
            component: Input,
            description:
                "Супер! Тепер ми краще розуміємо, що тобі потрібно. 😊 Залиш свій номер телефону і тобі зателефонує наша менеджер Марина. ",
            focus: "firstName",
            commonProps: { type: inputTypeEnum.NEW },
            list: [
                { name: "firstName", label: "Ім'я", className: "mx-3 mt-2" },
                {
                    name: "phoneNumber",
                    label: "Номер телефону",
                    className: "mx-3 mt-4",
                    maskProps: {
                        mask: `+38 (\\099) 999 9999`,
                        maskChar: "_",
                        alwaysShowMask: false,
                        name: "phoneNumber",
                    },
                },
            ],
            props: {
                type: inputTypeEnum.NEW,
            },
        },
    ],
};

export const QuizPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { slug } = useParams();

    useEffect(() => {
        fireAnalyticsEvent(events.JOIN_QUIZ)
    }, [])

    const onSubmit = useCallback(
        (data) => {
            dispatch(addLead({ ...data, status: "new-quiz" }));
        },
        [dispatch],
    );

    const toHome = useCallback(() => {
        history.push(`/`);
    }, [history]);

    const stepList = useMemo(() => steps[slug], [slug]);

    return (
        <div className={cx(styles.container, "container mt-4")}>
            <QuizForm stepList={stepList} toHome={toHome} onSubmit={onSubmit} />
        </div>
    );
};
