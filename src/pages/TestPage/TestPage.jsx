import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import cx from "classnames";

import { Button, Input, inputTypeEnum, Radio } from "components/index";

import styles from "./TestPage.module.scss";
import { useHistory } from "react-router";
import { Check } from "components/Icons/Check";

import { TestItem } from "./TestItem/TestItem";

import { questionsList } from "constants/lists";

const elementaryLimit = 10
const preIntermediateLimit = 18
const intermediateLimit = 28

const testResults = {
    "listening-1": {
        answer: "no",
        hit: 1
    },
    "grammer-1": {
        answer: "go",
        hit: 1
    },
    "grammer-2": {
        answer: "from",
        hit: 1
    },
    "reading-1": {
        answer: "answer-2",
        hit: 1
    },
    "grammer-3": {
        answer: "noisier",
        hit: 2
    },
    "grammer-4": {
        answer: "is-wearing",
        hit: 2
    },
    "listening-2": {
        answer: "no",
        hit: 3
    },
    "grammer-5": {
        answer: "some",
        hit: 3
    },
    "grammer-6": {
        answer: "would-have-sent",
        hit: 3
    },
    "reading-2": {
        answer: "answer-3",
        hit: 3
    },
    "grammer-7": {
        answer: "always-are-criticizing",
        hit: 3
    },
    "listening-3": {
        answer: "arrogant",
        hit: 4
    },
    "grammer-8": {
        answer: "unless",
        hit: 4
    },
    "reading-3": {
        answer: "answer-2",
        hit: 4
    },
    "grammer-9": {
        answer: "admitted-stealing",
        hit: 4
    },
    "grammer-10": {
        answer: "is-just-being-made",
        hit: 4
    }
}

export const TestPage = () => {
    const history = useHistory();
    const { handleSubmit, register } = useForm();
    const [test, setTest] = useState(0);
    const [level, setLevel] = useState('')
    const [resultCounter, setResultCounter] = useState(0)

    const testItem = useMemo(() => questionsList[test] || {}, [test]);

    const onSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    const calculateLevel = () => {
        if (resultCounter >= intermediateLimit) {
            setLevel('Upper Intermediate')
        } else if (resultCounter >= preIntermediateLimit) {
            setLevel('Intermediate')
        } else if (resultCounter >= elementaryLimit) {
            setLevel('Pre Inermediate')
        } else {
            setLevel('Elementary')
        }
    }

    console.log(level)

    const toHome = useCallback(() => {
        history.push(`/`);
    }, [history]);

    const onNext = useCallback(
        (e) => {
            const answer = e.target.value

            if (answer === testResults[e.target.name].answer ) {
                setResultCounter(resultCounter + testResults[e.target.name].hit)
            }

            test + 2 === questionsList.length && calculateLevel()

            e.target.type === "submit" && e.preventDefault();
            setTimeout(() => {
                test + 1 === questionsList.length && handleSubmit(onSubmit)();
                test === questionsList.length && toHome();
                setTest((test) => test + 1);
            }, 350);
        },
        [setTest, test, handleSubmit, onSubmit, toHome, resultCounter, setResultCounter],
    );

    const onPrev = useCallback(() => {
        setTest((test) => test - 1);
    }, []);

    const progressBarWidth = useMemo(() => (test === 0 ? 5 : (100 / questionsList.length) * test), [test]);
    const buttonOnClick = useMemo(() => (test < questionsList.length - 1 ? onPrev : onNext), [
        onNext,
        onPrev,
        test,
    ]);

    useEffect(() => {
        testItem.focus && setTimeout(() => document.getElementById(testItem.focus).focus(), 100);
    }, [testItem]);

    return (
        <div className={cx(styles.container, "container pt-4")}>
            <form
                className={cx(
                    styles.form,
                    "d-flex flex-column justify-content-between border border-transparent rounded-xl p-4 bg-white-new",
                )}
            >  
                <div className="flex-grow-1">
                    {testItem.audio && (
                        <div>
                            <h1 class="h3 mb-3 text-highlighted">
                                {testItem.audio.description}
                            </h1>
                            <audio class="mb-4" preload="auto" controls>
                                <source src={testItem.audio.source} />
                            </audio>      
                        </div>
                    )}
                    {testItem.text && (
                        <p>{testItem.text}</p>
                    )}
                    {testItem.description && (
                        <h2 className="h3 mb-3 text-highlighted">{testItem.description}</h2>
                    )}
                    <div className="mb-3">
                        {questionsList.map(({ component, commonProps = {}, ...item }, index) => (
                            <TestItem
                                {...item}
                                commonProps={commonProps}
                                component={component}
                                isHidden={test !== index}
                                register={register}
                                onClick={item.type === "radio" ? onNext : undefined}
                                key={item.name}
                            />
                        ))}
                        <div
                            className={cx("transition-250", {
                                "hidden-element": questionsList.length !== test,
                            })}
                        >
                            <h2 className="h3 mb-3">Дякуємо 😊</h2>
                            <h3 className="regular">
                                Стоп-стоп-стоп. Ти можеш зателефонувати самостійно прямо зараз і отримати{" "}
                                <span className="font-weight-semibold">знижку 10%</span> на всі наші курси та плани.<br />{" "}
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
                        disabled={test === 0}
                    >
                        {test === questionsList.length - 1 && "Відправити"}
                        {test === questionsList.length - 1 && <Check className="ml-2" fill="#fff" />}
                        {test < questionsList.length - 1 && "👈 Назад"}
                        {test === questionsList.length && "На головну 👀"}
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
