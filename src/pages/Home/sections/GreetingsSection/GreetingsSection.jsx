import React from "react";
import cx from "classnames";

import { Button, Scrollable } from "components/index";
import { coursesList } from "constants/lists";
import { ServiceScrollableItem } from "../../components/ServiceScrollableItem/ServiceScrollableItem";

export const GreetingsSection = ({ onOrderClick, isPortable, className }) => (
    <section className={cx("d-flex flex-column", className)}>
        <h2 className="font-medium">
            <strong> Англійська </strong> під культурним соусом. Єднаємо українського спеціаліста та
            англомовного клієнта.
        </h2>
        <div className="typing-container mb-2">
            <div className="font-medium typing-wrapper">Цінуємо кожного 😊</div>
        </div>
        <h2 className="hidden-element">Що ми пропонуємо?</h2>
        <Scrollable containerClassName="ml-n4 mr-n4" isScrollbarVisible={false}>
            {coursesList.map(({ imgSrc, ...item }, index, array) => (
                <ServiceScrollableItem
                    index={index}
                    array={array}
                    src={imgSrc}
                    key={item.slug}
                    {...item}
                />
            ))}
        </Scrollable>
        <div className={cx("d-flex mt-3", { "flex-column": isPortable })}>
            <Button
                className={cx("font-weight-bold text-highlighted rounded-xl", {
                    "mr-3": !isPortable,
                    "mb-3": isPortable,
                })}
                color="purple-soft"
                size="lg"
                onClick={onOrderClick}
            >
                Замовити дзвінок
            </Button>
            <Button
                className={cx("font-weight-bold text-highlighted rounded-xl", {
                    "mr-3": !isPortable,
                    "mb-3": isPortable,
                })}
                href="https://t.me/emerello"
                color="blue-soft"
                size="lg"
            >
                Написати нам
            </Button>
            <Button
                className="font-weight-bold text-highlighted rounded-xl"
                color="green-soft"
                size="lg"
            >
                Інтерактивний тест
            </Button>
        </div>
    </section>
);
