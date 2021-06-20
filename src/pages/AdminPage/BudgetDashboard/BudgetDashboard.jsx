import React from "react";
import { useSelector } from "react-redux";

import { selectBudget } from "store/app/selectors";

export const BudgetDashboard = () => {
    const budget = useSelector(selectBudget);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h2>Бюджет всього</h2>
                    <h3>{`${budget.sum} грн `}</h3>
                </div>
                <div className="col-6">
                    <h2>Заначка</h2>
                    <h3>{`${budget.blackSum} $ `}</h3>
                </div>
            </div>
        </div>
    );
};
