import React from "react";
import cx from "classnames";

import { Button, List } from "components/index";
import { valuesList } from "constants/lists";
import { IMAGES } from "constants/images";
import styles from "../../Home.module.scss";

export const GreetingsSection = ({ onOrderClick }) => (
    <section className={cx(styles.firstSection, "d-flex flex-column mb-5")}>
        <h2 className="font-medium">
            Школа розмовної англійської з індивідуальним підходом.
        </h2>
        <div className="typing-container mb-4">
            <div className="font-medium typing-wrapper">Цінуємо кожного 😊</div>
        </div>
        <Button
            className="font-weight-bold mb-3 text-highlighted rounded-20"
            color="purple-soft"
            size="lg"
            onClick={onOrderClick}
        >
            Замовити тест рівня
        </Button>
        <Button
            className="font-weight-bold mb-4 text-highlighted rounded-20"
            href="https://t.me/emerello"
            color="blue-soft"
            size="lg"
        >
            Написати нам
        </Button>
        <img src={IMAGES.values1} className={cx(styles.banner, "mb-4")} alt="lesson" />
        <List title="Наша методика" list={valuesList} />
    </section>
);
