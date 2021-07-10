import React from "react";
import cx from "classnames";

import { IMAGES } from "constants/images";

import { CourseStructure } from "./CourseStructure/CourseStructure";
import { Scrollable, List } from "components/";
import { ScrollableItemShadow } from "components/Scrollable/ScrollableItemShadow/ScrollableItemShadow";

const translations = {
    ua: {
        h1: "Курс “English communication in team”",
        h2_1: "Про Курс",
        h2_2: "Програма Курсу",
        h2_3: "Автори курсу",
        authorsList: [
            {
                name: "Марта Ярош",
                role: "Автор та Вчитель курсу",
                description:
                    "Хая, я відповідаю за якість вашої англійської після проходження курсу.",
                img: {
                    src: IMAGES.martaItAvatar,
                    alt:
                        "Марта Ярош - головний вчитель, автор програми курсу 'Англійська комунікація в IT команді'",
                },
                isBig: true,
            },
            {
                name: "Лєра Михальова",
                role: "Організатор Курсів",
                description:
                    "Привіт, я відповідаю за ваші найкращі враження від організації курсу.",
                img: {
                    src: IMAGES.leraItAvatar,
                    alt:
                        "Велерія Михальова - організатор курсу 'Англійська комунікація в IT команді'",
                },
            },
            {
                name: "Влад Балюк",
                role: "Організатор Курсів",
                description: "Здоровки, я також відповідаю за організацію курсу.",
                img: {
                    src: IMAGES.vladItAvatar,
                    alt: "Влад Балюк - організатор курсу 'Англійська комунікація в IT команді'",
                },
            },
        ],
    },
};

export const DetailedInfo = ({ isPortable }) => {
    return (
        <>
            <h2 className="h0 mb-4">{translations.ua.h2_1}</h2>
            <h3 className="font-weight-normal h2-28 mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
            </h3>
            <h2 className="h0 mb-4">{translations.ua.h2_2}</h2>
            <CourseStructure className="mb-5" />
            <h2 className="h0 mb-2">{translations.ua.h2_3}</h2>
            <Scrollable
                hasArrows
                isScrollbarVisible={false}
                isPortable={true}
                className={cx("mb-5", { "ml-n4": isPortable })}
            >
                {translations.ua.authorsList.map((item, index, array) => (
                    <ScrollableItemShadow isPortable={isPortable} index={index} array={array}>
                        <img className="image rounded-lg mb-2" direction="column" {...item.img} />
                        <h3 className="h2 font-weight-normal mb-3">{item.name}</h3>
                        <h4 className="h2 font-weight-normal mb-2">{item.role}</h4>
                        <List
                            itemClassName="h2 font-weight-normal"
                            list={["feature", "feature"]}
                            type="primary-new"
                        />
                    </ScrollableItemShadow>
                ))}
            </Scrollable>
            <h2 className="h0 mb-4">Під час навчання ви:</h2>
            <List
                itemClassName="h1 font-weight-normal pl-5"
                list={["feature", "feature", "feature"]}
                type="check"
            />
        </>
    );
};
