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
                            "Cпікінг-клаби в групах одного рівня 3-4 людини (8 + резерний)",
                            "Інспирейшн вебінари англійською з цікавими людьми, яким англійська допомогає в житті",
                            "Практика кожного дня в голосових телеграма разом з нами та іншими студентами",
                        ]}
                        buttonLabel="Хоцю"
                    />
                </div>
                <div className="d-flex justify-content-center bg-primary-soft">
                    <PlanCard
                        title="Pro"
                        price={1600}
                        type={planTypeEnum.PRO}
                        icon={<ProPlanIcon />}
                        description="Pro включає все що входить в Basic"
                        featuresList={[
                            "Індивідуальний план розвитку з регулярною перевіркою прогресу",
                            "Підписка на Netflix + спільний перегляд кожного тижня",
                            "Among Us раз в тиждень в інтернаціональних лоббі",
                        ]}
                        buttonLabel="Моя прєлесть"
                    />
                </div>
                <div className="d-flex justify-content-center bg-primary-soft">
                    <PlanCard
                        title="all-Featured"
                        price={2450}
                        type={planTypeEnum.ALL_FEATURED}
                        icon={<AllFeaturedPlanIcon />}
                        description="all-Featured включає все що входить в Basic і Pro"
                        featuresList={[
                            "Тет-а-тет з нейтів спікером по 15хв 2 рази на тиждень",
                            "Індивідуальне заняття раз в тиждень",
                        ]}
                        buttonLabel="Сюдаа"
                    />
                </div>
            </Slider>
        </div>
    );
};
