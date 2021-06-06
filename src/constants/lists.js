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
        title: "Pro - для швидкого навчання",
        slug: "pro-plan",
        description:
            "2 групових заняття в тиждень, 1 індивідуальне заняття в тиждень, 2 small talk з нейтів спікером в тиждень, вічна підписка на Netflix",
        list: [
            "2 групових заняття/тиждень",
            "1 індивідуальне/тиждень",
            "2 small talks з нейтів спікером / тиждень",
            "∞ підписка на Netflix",
        ],
        imgSrc: IMAGES.proCover,
        lessonsCount: 20,
        price: 2970,
        className: "bg-pro-new",
        status: {
            id: "ongoing",
        },
    },
    {
        title: "Basiс - для веселого навчання",
        slug: "basic-plan",
        description:
            "2 групових заняття в тиждень, вічна підписка на Netflix, командний перегляд серіалів англійською",
        imgSrc: IMAGES.groupCover,
        lessonsCount: 8,
        price: 1370,
        className: "bg-group-new",
        list: [
            "2 групових заняття/тиждень",
            "∞ підписка на Netflix",
            "командний перегляд серіалів англійською",
        ],
        status: {
            id: "ongoing",
        },
    },
    {
        title: "Solo - для персонального навчання",
        slug: "solo-plan",
        description: "Все під вас",
        imgSrc: IMAGES.soloCover,
        lessonsCount: 8,
        price: 2470,
        className: "bg-solo-new",
        list: [
            "індивідуальний план навчання",
            "2 індивідуальні заняття /тиждень",
            "∞ підписка на Netflix",
        ],
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
        name: "Софія",
        avatar: IMAGES.sophia,
        description:
            "Нещодавно підписала контракт з англомовним клієнтом, з яким сама працювала. Можу говорити з ним по 45 хвилин і взагалі ніякого дискомфорту немає. Під час дзвінків я знаю, що навіть якщо щось не знатиму на англ, то зможу це пояснити і все буде окей.",
        alt: "Софія, студентка школи розмовної англійської wannablab",
    },
    {
        name: "Вова",
        avatar: IMAGES.vovaAvatar,
        description:
            "Мій рівень на тестуванні оцінили в А2. Ціллю була робота, пов’язана із комунікацією англійською. Через 2 місяці я успішно пройшов співбесіду та працюю customer support і далі вивчаю англійську.",
        alt: "Вова, студент школи розмовної англійської wannablab",
    },
    {
        name: "Володимир",
        avatar: IMAGES.volodymyrAvatar,
        description:
            "Я навчився думати англійською на побутовому рівні. Навіть вдома я намагаюся проговорювати назви предметів англійською. Зараз я переписуюся зі своїм знайомим з Лондону і мені вже не потрібен для цього перекладач. Скоро ми плануємо зустрітися, тому це для мене ще один стимул вдосконалювати мову. ",
        alt: "Володимир, студент школи розмовної англійської wannablab",
    },
];
