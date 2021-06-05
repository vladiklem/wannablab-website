import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import cx from "classnames";

import { Button, Input, inputTypeEnum, Radio } from "components/index";

import styles from "./QuizPage.module.scss";
import { useHistory } from "react-router";
import { Check } from "components/Icons/Check";

import { StepItem } from "./StepItem/StepItem";

const steps = [
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
];

export const QuizPage = () => {
    const history = useHistory();
    const { handleSubmit, register } = useForm();
    const [step, setStep] = useState(0);

    const stepItem = useMemo(() => steps[step] || {}, [step]);

    const onSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    const toHome = useCallback(() => {
        history.push(`/`);
    }, [history]);

    const onNext = useCallback(
        (e) => {
            e.target.type === "submit" && e.preventDefault();
            setTimeout(() => {
                step + 1 === steps.length && handleSubmit(onSubmit)();
                step === steps.length && toHome();
                setStep((step) => step + 1);
            }, 350);
        },
        [setStep, step, handleSubmit, onSubmit, toHome],
    );

    const onPrev = useCallback(() => {
        setStep((step) => step - 1);
    }, []);

    const progressBarWidth = useMemo(() => (step === 0 ? 5 : (100 / steps.length) * step), [step]);
    const buttonOnClick = useMemo(() => (step < steps.length - 1 ? onPrev : onNext), [
        onNext,
        onPrev,
        step,
    ]);

    useEffect(() => {
        stepItem.focus && setTimeout(() => document.getElementById(stepItem.focus).focus(), 100);
    }, [stepItem]);

    return (
        <div className={cx(styles.container, "container pt-4")}>
            <form
                className={cx(
                    styles.form,
                    "d-flex flex-column justify-content-between border border-transparent rounded-xl p-4 bg-white-new",
                )}
            >
                <div className="flex-grow-1">
                    {stepItem.description && (
                        <h2 className="h3 mb-3 text-highlighted">{stepItem.description}</h2>
                    )}
                    <div className="mb-3">
                        {steps.map(({ component, commonProps = {}, ...item }, index) => (
                            <StepItem
                                {...item}
                                commonProps={commonProps}
                                component={component}
                                isHidden={step !== index}
                                register={register}
                                onClick={item.type === "radio" ? onNext : undefined}
                                key={item.name}
                            />
                        ))}
                        <div
                            className={cx("transition-250", {
                                "hidden-element": steps.length !== step,
                            })}
                        >
                            <h2 className="h3 mb-3">Дякуємо 😊</h2>
                            <h3 className="regular">
                                Наш кастомер ловер Марина заретелефонує тобі найближчим часом, або
                                ти можеш зробити це сам і отримати{" "}
                                <span className="font-weight-semibold">знижку 10%</span> <br />{" "}
                                Тисни <a href="tel:+380982864800">+380982864800</a> 😉
                            </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <Button
                        block
                        className="d-flex align-items-center justify-content-center bg-primary-new rounded-lg font-weight-semibold"
                        size="lg"
                        onClick={buttonOnClick}
                        type="submit"
                        disabled={step === 0}
                    >
                        {step === steps.length - 1 && "Відправити"}
                        {step === steps.length - 1 && <Check className="ml-2" fill="#fff" />}
                        {step < steps.length - 1 && "👈 Назад"}
                        {step === steps.length && "На головну 👀"}
                    </Button>
                    <div className="w-100 mt-3 border p-1 rounded-xl border-primary-new">
                        <div
                            style={{ width: `${progressBarWidth}%` }}
                            className={cx(
                                styles.progressBar,
                                "bg-secondary-new rounded-xl transition-250",
                            )}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};
