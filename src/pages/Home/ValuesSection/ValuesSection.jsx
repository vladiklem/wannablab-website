import React from "react";
import { AllFeaturedPlanIcon } from "components/Icons/AllFeaturedPlanIcon";

export const ValuesSection = () => (
    <section className="container">
        <h1 className="h2">Наші цінності</h1>
        <div>
            <div className="d-flex align-items-center">
                <AllFeaturedPlanIcon height={32} width={32} className="mr-2" />
                <h2 className="h3">Люди</h2>
            </div>
            <h3 className="regular">
                Наші клієнти та наша команда, адже ми не просто вивчаємо інгліш, ми будуємо
                ком'юніті та вчимося найефективнішій комунікації.
            </h3>
        </div>
    </section>
);
