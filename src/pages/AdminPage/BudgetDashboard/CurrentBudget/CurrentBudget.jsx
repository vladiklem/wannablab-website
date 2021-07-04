import React from "react";
import { useSelector } from "react-redux";

import { selectBudget } from "store/app/selectors";
import { budgetsList } from "constants/lists";

export const CurrentBudget = () => {
    const budget = useSelector(selectBudget);

    return (
        <div className="row mb-4">
            {budgetsList.map(({ name, slug }) => (
                <div className={`col-${12 / budgetsList.length}`}>
                    <h2 className="regular">{name}</h2>
                    <h3 className="h3">{budget[slug]}</h3>
                </div>
            ))}
        </div>
    );
};
