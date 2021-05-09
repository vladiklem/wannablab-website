import React from "react";
import cx from "classnames";

import { Button, List } from "components/index";
import { valuesList } from "constants/lists";
import { IMAGES } from "constants/images";
import styles from "../../Home.module.scss";

export const GreetingsSection = ({ onOrderClick }) => (
    <section className={cx(styles.firstSection, "d-flex flex-column")}>
        <h2 className={cx(styles.fontSize22, "h2")}>
            Школа розмовної англійської з індивідуальним підходом.
        </h2>
        <div class="typing-container mb-4">
            <div class={cx(styles.fontSize22, "h2 typing-wrapper")}>Цінуємо кожного 😊</div>
        </div>
        <Button
            className="font-weight-bold mb-3 text-highlighted"
            color="purple-soft"
            size="lg"
            onClick={onOrderClick}
        >
            Замовити тест рівня
        </Button>
        <Button
            className="font-weight-bold mb-4 text-highlighted"
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
