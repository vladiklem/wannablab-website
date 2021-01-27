import React from "react";
import Slider from "react-slick";

import { PlanCard, planTypeEnum } from "components/PlanCard/PlanCard";
import { BasicPlanIcon } from "components/Icons/BasicPlanIcon";
import { ProPlanIcon } from "components/Icons/ProPlanIcon";
import { AllFeaturedPlanIcon } from "components/Icons/AllFeaturedPlanIcon";

import styles from "./PlansSlider.module.scss";

export const PlansSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        slidersToShow: 3,
        slidersToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidersToShow: 1,
                    slidersToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className={styles.container}>
            <Slider {...settings}>
                <div className="d-flex justify-content-center bg-primary-soft">
                    <PlanCard
                        title="Basic"
                        price={1190}
                        icon={<BasicPlanIcon />}
                        featuresList={[
                            "8 спікінг-клабів в групах одного рівня до 4 людей",
                            "inspitation вебінари з цікавими людьми англійською",
                        ]}
                        buttonLabel="Хочу"
                    />
                </div>
                <div className="d-flex justify-content-center bg-primary-soft">
                    <PlanCard
                        title="Pro"
                        price={1850}
                        type={planTypeEnum.PRO}
                        icon={<ProPlanIcon />}
                        description="все що є в Basic"
                        featuresList={[
                            "індивідуальний план розвитку",
                            "підписка на Netflix",
                            "командний перегляд серіалів та онлайн-ігри щотижня",
                        ]}
                        buttonLabel="Хочу"
                    />
                </div>
                <div className="d-flex justify-content-center bg-primary-soft">
                    <PlanCard
                        title="All-Featured"
                        price={2990}
                        type={planTypeEnum.ALL_FEATURED}
                        icon={<AllFeaturedPlanIcon />}
                        description="все що є в Basic та Pro"
                        featuresList={[
                            "тет-а-тет з нейтів спікером 2 рази на тиждень",
                            "приватне заняття з ментором раз на тиждень",
                        ]}
                        buttonLabel="Хочу"
                    />
                </div>
            </Slider>
        </div>
    );
};
