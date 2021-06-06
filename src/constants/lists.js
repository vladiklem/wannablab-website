import { IMAGES } from "./images";

import { Input, inputTypeEnum, Radio } from "components/index";
import beginner from "assets/audio/beginner_elementary.mp3";
import intermediate from "assets/audio/pre_intermediate_intermediate.mp3"
import advanced from "assets/audio/upper_intermediate_advanced.mp3"

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
        title: "Basiс - для чілового навчання",
        slug: "basic-plan",
        featuredList: ["2 групових заняття в тиждень", "вічна підписка на Netflix", "командний перегляд серіалів англійською"],
        priceList: ["1370грн/місяць", "3570грн/3місяці"],
        imgSrc: IMAGES.groupLessonsImg,
        lessonsCount: 20,
        price: 2970,
        className: "bg-light-purple",
        status: {
            id: "ongoing",
        },
    },
    {
        title: "Solo - для персонального навчання",
        slug: "solo-plan",
        featuredList: ["індивідуальний план навчання", "2 індивідуальних заняття в тиждень", "вічна підписка на Netflix"],
        priceList: ["2470грн/місяць", "6970грн/3місяці"],
        imgSrc: IMAGES.personalLessonsImg,
        lessonsCount: 8,
        price: 2470,
        className: "bg-light-blue",
        status: {
            id: "ongoing",
        },
    },
    {
        title: "Pro - для швидкого навчання",
        slug: "pro-plan",
        featuredList: ["2 групових заняття в тиждень", "1 індивідуальне заняття в тиждень", "2 small talk з нейтів спікером в тиждень", "вічна підписка на Netflix"],
        priceList: ["2970грн/місяць", "8370грн/3місяці"],
        imgSrc: IMAGES.smallTalkLessonsImg,
        lessonsCount: 16,
        price: 1970,
        className: "bg-light-green text-white",
        status: {
            id: "start-soon",
            date: "10 серпня",
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

export const questionsList = [
    {
        type: "radio",
        name: "listening-1",
        component: Radio,
        audio: {
            source: beginner,
            description: "Прослухай аудіо і відміть правильну відповідь"
        },
        description: "Kelly is satisfied with her rest in Blackpool.",
        commonProps: {
            name: "listening-1",
        },
        list: [
            { value: "yes", children: "yes" },
            { value: "no", children: "no" },
        ],
    },
    {
        type: "radio",
        name: "grammer-1",
        component: Radio,
        description: "We ... to work every day.",
        commonProps: {
            name: "grammer-1",
        },
        list: [
            { value: "gos", children: "gos" },
            { value: "go", children: "go" },
            { value: "goes", children: "goes" },
        ],
    },
    {
        type: "radio",
        name: "grammer-2",
        component: Radio,
        description: "Nick is Ukrainian. He’s ... Ukraine.",
        commonProps: {
            name: "grammer-2",
        },
        list: [
            { value: "from", children: "from" },
            { value: "to", children: "to" },
            { value: "at", children: "at" },
        ],
    },
    {
        type: "radio",
        name: "reading-1",
        component: Radio,
        text: "David is  не выбрано a typical man – he is 27 and works  не выбрано as a manager for an international company. But there is something special about him – he designs clothes for his pet Dolly – the hairless Sphynx cat. In university he went to sewing courses and now he cannot imagine his life without creating clothes even for a cat.",
        description: "Why does David design clothes for his cat?",
        commonProps: {
            name: "reading-1",
        },
        list: [
            { value: "answer-1", children: "All Sphynx cats need clothes because they do not have fur." },
            { value: "answer-2", children: "He attended special classes and likes sewing." },
            { value: "answer-3", children: "He is bored at his work so he wants to do something new." },
        ],
    },
    {
        type: "radio",
        name: "grammer-3",
        component: Radio,
        description: "London is ... than Kyiv.",
        commonProps: {
            name: "grammer-3",
        },
        list: [
            { value: "nosiest", children: "nosiest" },
            { value: "noisy", children: "noisy" },
            { value: "noisier", children: "noisier" },
        ],
    },
    {
        type: "radio",
        name: "grammer-4",
        component: Radio,
        description: "Look at Emma! She ... a blue skirt today!",
        commonProps: {
            name: "grammer-4",
        },

        list: [
            { value: "wearing", children: "wearing" },
            { value: "is-wearing", children: "is wearing" },
            { value: "is-wear", children: "is wear" },
        ],
    },
    {
        type: "radio",
        name: "listening-2",
        component: Radio,
        audio: {
            source: intermediate,
            description: "Прослухай аудіо і відміть правильну відповідь"
        },
        description: "Nina was shy that is why she didn’t give her telephone number.",
        commonProps: {
            name: "listening-2",
        },
        list: [
            { value: "yes", children: "yes" },
            { value: "no", children: "no" },
        ],
    },
    {
        type: "radio",
        name: "grammer-5",
        component: Radio,
        description: "There must be ... coffee left in the coffee-pot.",
        commonProps: {
            name: "grammer-5",
        },

        list: [
            { value: "a-few", children: "a few" },
            { value: "few", children: "few" },
            { value: "some", children: "some" },
        ],
    },
    {
        type: "radio",
        name: "grammer-6",
        component: Radio,
        description: "Bill ... a present if he had remembered it was Anna’s birthday.",
        commonProps: {
            name: "grammer-6",
        },

        list: [
            { value: "would-have-sent", children: "would have sent" },
            { value: "would-send", children: "would send" },
            { value: "sent", children: "sent" },
        ],
    },
    {
        type: "radio",
        name: "reading-2",
        component: Radio,
        text: "Stress can be caused by any type of physical or emotional stimulus usually without us noticing it. Different factors can be the reason  не выбрано for stress, starting from social and financial problems ending with illness and family discord. Stress can result in mood changes, poor health and even depression.",
        description: "According to the paragraph...",
        commonProps: {
            name: "reading-2",
        },
        list: [
            { value: "answer-1", children: "People know all the causes of stress." },
            { value: "answer-2", children: "Stress does not worsen people’s health." },
            { value: "answer-3", children: "Stress can “hit” us from everywhere." },
        ],
    },
    {
        type: "radio",
        name: "grammer-7",
        component: Radio,
        description: "You ... me!",
        commonProps: {
            name: "grammer-7",
        },

        list: [
            { value: "criticize-always", children: "criticize always" },
            { value: "are-always-criticizing", children: "are always criticizing" },
            { value: "always-are-criticizing", children: "always are criticizing" },
        ],
    },
    {
        type: "radio",
        name: "listening-3",
        component: Radio,
        audio: {
            source: advanced,
            description: "Прослухай аудіо і відміть правильну відповідь"
        },
        description: "Which word most fits the description of a person?",
        commonProps: {
            name: "listening-3",
        },
        list: [
            { value: "critical", children: "critical" },
            { value: "cruel", children: "cruel" },
            { value: "arrogant", children: "arrogant" },
            { value: "deceitful", children: "deceitful" },
        ],
    },
    {
        type: "radio",
        name: "grammer-8",
        component: Radio,
        description: "Alice won’t be able to buy that car ... she saves some money.",
        commonProps: {
            name: "grammer-8",
        },

        list: [
            { value: "unless", children: "unless" },
            { value: "if", children: "if" },
            { value: "as-long-as", children: "as long as" },
        ],
    },
    {
        type: "radio",
        name: "reading-3",
        component: Radio,
        text: "The amount of information on offer is so considerable that along with an abundance of distractions like advertisements and tempting news blocks the choice of that needed piece of information virtually becomes a torture for many. Users go online with an intention of receiving knowledge but  не выбрано end up purposelessly roaming from site to site losing their time and temper occasionally.",
        description: "According to the paragraph...",
        commonProps: {
            name: "reading-3",
        },
        list: [
            { value: "answer-1", children: "How much violence there can be on the Net." },
            { value: "answer-2", children: "How people struggle to find valuable and useful information." },
            { value: "answer-3", children: "How much time people waste on reading pop-up advertisements." },
        ],
    },
    {
        type: "radio",
        name: "grammer-9",
        component: Radio,
        description: "Steven ... the wallet.",
        commonProps: {
            name: "grammer-9",
        },

        list: [
            { value: "admitted-to-steal", children: "admitted to steal" },
            { value: "admitted-steal", children: "admitted steal" },
            { value: "admitted-stealing", children: "admitted stealing" },
        ],
    },
    {
        type: "radio",
        name: "grammer-10",
        component: Radio,
        description: "She’ll have to wait because the breakfast ...",
        commonProps: {
            name: "grammer-10",
        },

        list: [
            { value: "is-just-making", children: "is just making" },
            { value: "is-just-being-made", children: "is just being made" },
            { value: "is-just-being-making", children: "is just being making" },
        ],
    },
    {
        type: "input",
        component: Input,
        description: "Супер! Тепер ми краще розуміємо, що тобі потрібно. 😊 Залиш свій номер телефону і тобі зателефонує наша менеджер Марина. ",
        focus: "firstName",
        commonProps: { type: inputTypeEnum.NEW },
        list: [
            { name: "firstName", label: "Ім'я", className: "mx-4 mt-2" },
            {
                name: "phoneNumber",
                label: "Номер телефону",
                className: "mx-4 mt-4",
                maskProps: {
                    mask: `+38 (\\099) 999 9999`,
                    maskChar: "_",
                    alwaysShowMask: false,
                    name: "phoneNumber",
                },
            },
        ],
        props: {
            type: inputTypeEnum.NEW,
        },
    },
];