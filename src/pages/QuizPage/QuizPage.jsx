import React, { useCallback, useMemo } from "react";
import cx from "classnames";

import { Input, inputTypeEnum, Radio } from "components/index";

import styles from "./QuizPage.module.scss";
import { useHistory, useParams } from "react-router";

import { QuizForm } from "./QuizForm/QuizForm";
import { useDispatch } from "react-redux";
import { addLead } from "store/leads/actions";

const steps = {
    lead: [
        {
            type: "radio",
            name: "proffesion",
            component: Radio,
            description: "А з якої ти сфери, страннік?",
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
            name: "evolution",
            component: Radio,
            description: "Відміть будь ласка в чому хочеш розвиватися ",
            commonProps: {
                name: "evolution",
            },
            list: [
                { value: "speak", children: "Розмовна" },
                { value: "listen", children: "Слухання" },
                { value: "writing", children: "Письмо" },
                { value: "vocab", children: "Словарний запас" },
                { value: "prof", children: "Проф комунікація" },
            ],
        },
        {
            type: "input",
            component: Input,
            focus: "firstName",
            commonProps: { type: inputTypeEnum.NEW },
            list: [
                { name: "firstName", label: "Ім'я", className: "mx-4 mt-2" },
                {
                    type: "tel",
                    name: "phoneNumber",
                    label: "Номер телефону",
                    className: "mx-4 mt-4",
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
