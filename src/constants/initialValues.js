import { eventTypesEnum } from "./enums";

export const initialUser = {
    fullName: "",
    username: "",
    email: "",
    phoneNumer: "",
    startLevel: "A2",
    description: "",
};

export const initialEvent = {
    title: "",
    start: "",
    end: "",
    type: eventTypesEnum.GROUP_LESSON,
    members: [],
    description: "",
};

export const initialPayment = {
    blaberId: "",
    sum: 1,
    date: "",
    description: "",
};

export const initialGroup = {
    title: "",
    members: [],
    description: "",
};
