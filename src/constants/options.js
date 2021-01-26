import { eventTypesEnum } from "./enums";

export const eventTypeOptions = [
    { label: "Урок для групи", value: eventTypesEnum.GROUP_LESSON },
    { label: "Лекція", value: eventTypesEnum.LECTION },
    { label: "Перегляд фільму/серіалу", value: eventTypesEnum.WATCH },
    { label: "Вебінар", value: eventTypesEnum.WEBINAR },
    { label: "Звінок", value: eventTypesEnum.CALL },
    { label: "Приватне заняття", value: eventTypesEnum.PRIVATE_LESSON },
];

export const mentorOptions = [
    { label: "Марта Ярош", value: "martaYarosh" },
    { label: "Марина Торохтій", value: "marinaTorohtiy" },
    { label: "Даша Момот", value: "dashaMomot" },
];

export const levelOptions = ["A2", "pre-B1", "B1", "pre-B2", "B2", "C1", "Native"];