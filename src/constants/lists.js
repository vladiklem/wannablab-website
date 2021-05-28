import { IMAGES } from "./images";

export const servicesList = [
    {
        slug: "group-lessons",
        title: "Групові уроки",
        description: "Командна робота над мовленням у форматі спікінг клабу",
        imgSrc: IMAGES.groupLessonsImg,
        className: "bg-light-purple",
    },
    {
        slug: "personal-lessons",
        title: "Індивідуальні уроки",
        description: "Інтенсивна робота у бажаному напрямку один на один",
        imgSrc: IMAGES.personalLessonsImg,
        className: "bg-light-blue",
    },
    {
        slug: "small-talks",
        title: "Small talks",
        description: "Швидка практика на кожен день",
        imgSrc: IMAGES.smallTalkLessonsImg,
        className: "bg-light-green",
    },
];

export const coursesList = [
    {
        title: "Prooo, для самих жоских",
        slug: "pro-plan",
        shortDescription:
            "Супер інтенсивний план - групові та індивідуальні уроки, смол токи, матеріал для самостійного опрацювання",
        description: "",
        imgSrc: IMAGES.groupLessonsImg,
        lessonsCount: 20,
        price: 2970,
        className: "bg-light-purple",
        status: {
            id: "ongoing",
        },
    },
    {
        title: "Solo, для самих індивідуальних",
        slug: "solo-plan",
        description: "Все під вас",
        imgSrc: IMAGES.personalLessonsImg,
        lessonsCount: 8,
        price: 2470,
        className: "bg-light-blue",
        status: {
            id: "ongoing",
        },
    },
    {
        title: "Make traveling great again",
        slug: "travel-plan",
        description: "Готуємо до очікуваного сезону закордонних поїздок всього за місяць!",
        imgSrc: IMAGES.smallTalkLessonsImg,
        lessonsCount: 16,
        price: 1970,
        className: "bg-light-green text-white",
        status: {
            id: "start-soon",
            date: "10 серпня",
        },
    },
    {
        title: "Basic, групове м'ясо",
        slug: "basic-plan",
        description: "Командна робота над сприйняттям на слух та формулюванням думок",
        imgSrc: IMAGES.smallTalkLessonsImg,
        lessonsCount: 8,
        price: 1370,
        className: "bg-light-green text-white",
        status: {
            id: "ongoing",
        },
    },
];

export const valuesList = [
    "Розмовляємо 100% навчання",
    "Індивідуальне ставлення до учнів",
    "Вчимо слова та вирази у контексті",
];

export const mentorsList = [
    {
        slug: "marta-yarosh",
        name: "Марта Ярош",
        src: IMAGES.martaAvatar,
        list: ["Сертифікат IELTS на C2", "2 роки досвіду"],
        color: "light-green",
        description: "Вчитель та модель в одному лиці.",
    },
    {
        slug: "kate-timchenko",
        name: "Катя Тимченко",
        description: "",
        src: IMAGES.kateAvatar,
        list: ["Сертифікат IELTS на C1", "3 роки досвіду"],
        color: "soft-purple",
    },
    {
        slug: "ann-stepova",
        name: "Аня Степова",
        src: IMAGES.anyaAvatar,
        list: ["Сертифікат IELTS на C1", "3 роки досвіду"],
        color: "soft-blue",
    },
    {
        slug: "marina-torokhtiy",
        name: "Марина Торохтій",
        src: IMAGES.martaAvatar,
        list: ["Сертифікат IELTS на C1", "3 роки досвіду"],
        color: "soft-purple",
    },
];

export const usersFeedbackList = [
    {
        name: "Sofia",
        avatar: IMAGES.sophia,
        description:
            "Нещодавно підписала контракт з англомовним клієнтом, з яким сама працювала. Можу говорити з ним по 45 хвилин і взагалі ніякого дискомфорту немає.",
        alt: "Софія, студентка школи розмовної англійської wannablab",
    },
];
