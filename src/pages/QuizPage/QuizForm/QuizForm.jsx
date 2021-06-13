import React, { useCallback, useMemo, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import cx from "classnames";

import { Button } from "components/index";
import { telNumber } from "constants/social";

import styles from "./QuizForm.module.scss";
import { Check } from "components/Icons/Check";

import { StepItem } from "../StepItem/StepItem";

export const QuizForm = ({ stepList, toHome, onSubmit }) => {
    const { handleSubmit, register } = useForm();
    const [step, setStep] = useState(0);

    const stepItem = useMemo(() => stepList[step] || {}, [step, stepList]);

    const len = useMemo(() => stepList.length, [stepList]);

    const onNext = useCallback(
        (e) => {
            e.target.type === "submit" && e.preventDefault();
            setTimeout(() => {
                step + 1 === len && handleSubmit(onSubmit)();
                step === len && toHome();
                setStep((step) => step + 1);
            }, 350);
        },
        [setStep, step, len, handleSubmit, onSubmit, toHome],
    );

    const onPrev = useCallback(() => {
        step > 0 && setStep((step) => step - 1);
    }, [step]);

    const progressBarWidth = useMemo(() => (step === 0 ? 5 : (100 / len) * step), [len, step]);

    const buttonOnClick = useMemo(() => (step < len - 1 ? onPrev : onNext), [
        onNext,
        onPrev,
        step,
        len,
    ]);

    useEffect(() => {
        stepItem.focus && setTimeout(() => document.getElementById(stepItem.focus).focus(), 100);
    }, [stepItem]);

    return (
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
                    {stepList.map(({ component, commonProps = {}, ...item }, index) => (
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
                            "hidden-element": len !== step,
                        })}
                    >
                        <h2 className="h3 mb-3">Дякуємо 😊</h2>
                        <h3 className="regular">
                            Наш кастомер ловер Марина заретелефонує тобі найближчим часом, або ти
                            можеш зробити це сам і отримати{" "}
                            <span className="font-weight-semibold">знижку 10%</span> <br /> Тисни{" "}
                            <a href={`tel:${telNumber.short}`}>{telNumber.long}</a> 😉
                        </h3>
                    </div>
                </div>
            </div>
            <div>
                <Button
                    block
                    className={cx(
                        "d-flex align-items-center justify-content-center rounded-lg font-weight-semibold",
                        {
                            "shadow-none": step !== len - 1,
                        },
                    )}
                    size="lg"
                    color="primary-new"
                    onClick={buttonOnClick}
                    type="submit"
                    href={step === 0 ? "/" : undefined}
                >
                    {step === len - 1 && "Відправити"}
                    {step === len - 1 && <Check className="ml-2" fill="#fff" />}
                    {step < len - 1 && "👈 Назад"}
                    {step === len && "На головну 👀"}
                </Button>
                <div className="w-100 mt-3 border p-1 rounded-xl border-primary-new">
                    <div
                        style={{ width: `${progressBarWidth}%` }}
                        className={cx(
                            styles.progressBar,
                            "bg-secondary-gradient rounded-xl transition-250",
                        )}
                    />
                </div>
            </div>
        </form>
    );
};
