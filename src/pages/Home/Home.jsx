import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";

import { PlanCard, planTypeEnum } from "components/PlanCard/PlanCard";
import { BasicPlanIcon } from "components/Icons/BasicPlanIcon";
import { ProPlanIcon } from "components/Icons/ProPlanIcon";
import { AllFeaturedPlanIcon } from "components/Icons/AllFeaturedPlanIcon";
import { adminPasswordCheck } from "utils/password";
import { mediaBreakpointsEnum } from "constants/enums";

import { LeadForm } from "./components/LeadForm/LeadForm";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { PlansSlider } from "./components/PlansSlider/PlansSlider";

import styles from "./Home.module.scss";

export const Home = ({ isOpen, toggle }) => {
    const history = useHistory();
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const toAdmin = useCallback(() => {
        history.push("/admin");
    }, [history]);

    const onSubmit = useCallback(
        (data) => {
            adminPasswordCheck(data) && toAdmin();
        },
        [toAdmin],
    );

    return (
        <div className={styles.background}>
            <div id="lead-form" className={cx("container", styles.homeContainer)}>
                <div className={styles.firstSection}>
                    <div className="d-flex justify-content-center mt-3">
                        <LeadForm className={styles.leadForm} />
                        <LoginForm isOpen={isOpen} toggle={toggle} onSubmit={onSubmit} />
                    </div>
                </div>
                {isPortable && (
                    <div id="prices" className={cx("pb-5 pt-2", styles.section)}>
                        <div>
                            <PlansSlider />
                        </div>
                    </div>
                )}
                {!isPortable && (
                    <div id="prices" className={cx("pt-4", styles.section)}>
                        <div
                            className={cx(
                                "d-flex justify-content-between flex-wrap",
                                styles.planCardsList,
                            )}
                        >
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
                                className="mb-4 mr-4 shadow-medium"
                            />
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
                                className="mb-4 mr-4 shadow-medium"
                            />
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
                                className="mb-4 mr-4 shadow-medium"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
