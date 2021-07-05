import React from "react";

import { ArrowRightLong } from "components/Icons/ArrowRightLong";

const menuItems = [
    {
        label: "Хто зробив курс?",
        slug: "wannablab-it-who-done",
    },
    {
        label: "Яка начинка курсу?",
        slug: "wannablab-it-what-inside",
    },
    {
        label: "Для кого курс?",
        slug: "wannablab-it-for-who",
    },
    {
        label: "Що отримаю на виході?",
        slug: "wannablab-it-what-after",
    },
];

export const Menu = () => (
    <ul className="list list-features-white">
        {menuItems.map(({ label, slug }) => (
            <li className="mb-2 font-weight-semibold">
                <a href={`#${slug}`} className="d-blocl text-white h4">
                    {label}
                    <ArrowRightLong fill="#fff" width={24} height={24} className="ml-3" />
                </a>
            </li>
        ))}
    </ul>
);
