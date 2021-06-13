import React from "react";
import cx from "classnames";

import { Button, Scrollable } from "components/index";
import { coursesList } from "constants/lists";
import { leraContact } from "constants/social";
import { ServiceScrollableItem } from "components/styled/ServiceScrollableItem/ServiceScrollableItem";

export const GreetingsSection = ({ onOrderClick, isPortable, toCourse, className }) => (
    <section className={cx("d-flex flex-column container mb-4", className)}>
        <h2
            className={cx({
                "font-medium": !isPortable,
                "regular font-weight-semibold": isPortable,
            })}
        >
            Навчаємо розмовній <strong>англійській</strong> онлайн для професійних цілей
        </h2>
        <div className="typing-container mb-4" id="wannablab-courses">
            <div
                className={cx("typing-wrapper", {
                    "font-medium": !isPortable,
                    "regular font-weight-semibold": isPortable,
                })}
            >
                Цінуємо кожного 😊
            </div>
        </div>
        <Scrollable
            hasArrows={true}
            offset={isPortable ? 300 : 460}
            containerClassName="ml-n4 mr-n4"
            isScrollbarVisible={false}
            components={{
                Header: <h2 className="h3 font-weight-bold">Наші плани та курси</h2>,
            }}
        >
            {coursesList.map(({ imgSrc, ...item }, index, array) => (
                <ServiceScrollableItem
                    index={index}
                    array={array}
                    src={imgSrc}
                    key={item.slug}
                    isPortable={isPortable}
                    onClick={toCourse}
                    {...item}
                />
            ))}
        </Scrollable>
        <div className={cx("d-flex mt-3", { "flex-column": isPortable })}>
            <Button
                className={cx("font-weight-bold text-highlighted rounded-xl bg-primary-new", {
                    "mr-3": !isPortable,
                    "mb-3": isPortable,
                })}
                size="lg"
                onClick={onOrderClick}
            >
                Замовити дзвінок
            </Button>
            <Button
                className={cx("font-weight-bold rounded-xl", {
                    "mr-3": !isPortable,
                    "mb-3": isPortable,
                })}
                color="primary-new"
                size="lg"
                href="/quiz/lead"
                outline
            >
                Пройти тестування рівня
            </Button>
            <Button
                className="font-weight-bold rounded-xl"
                href={leraContact}
                color="primary-new"
                size="lg"
                outline
            >
                Написати нам в Телеграм
            </Button>
        </div>
    </section>
);
