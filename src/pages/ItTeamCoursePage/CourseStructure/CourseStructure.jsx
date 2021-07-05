import { Collapse, List } from "components/index";
import React from "react";

const structure = [
    {
        title: "Часопис англійською",
        titleEng: "Basic tenses",
        lessons: [
            "Past Simple (Your previous work experience)",
            "Present Simple (Your work, hobbies, free time)",
            "Future Simple (Your Future plan + goals)",
            "Спікінг клаб",
        ],
        description:
            "Базові часи - Past Simple, Present Simple, Future Simple. По уроку на кожний та спікінг клаб в кінці.",
    },
    {
        title: "",
        titleEng: "Dealing with people",
        lessons: [
            "Asking smth (I would/ some modal verbs)",
            "Suggestions (how to make and react) - linkers and I think",
            "Criticism",
            "Спікінг клаб",
        ],
        description: "",
    },
    {
        title: "",
        lessons: [
            "Plans for a new product (how to plan and make plans)",
            "Changes and how to respond to them",
            "Feedback (respond and provide)",
            "Спікінг клаб",
        ],
        titleEng: "Projects",
        description: "",
    },
    {
        title: "",
        titleEng: "Meetings",
        lessons: [
            "Brainstorming the idea",
            "Present an idea and report on what you did",
            "Dealing with misunderstandings",
            "Спікінг клаб",
        ],
        description: "",
    },
];

export const CourseStructure = () => {
    return (
        <div>
            {structure.map(({ lessons, titleEng }, index) => (
                <Collapse
                    togglerClassName="text-white font-weight-semibold text-left px-3"
                    togglerContent={`${index + 1}/ ${titleEng}`}
                    className="border border-white border-width-2 rounded-xl mb-3"
                    contentClassName="px-3 pb-3"
                >
                    <List list={lessons} type="features-white" />
                </Collapse>
            ))}
        </div>
    );
};
