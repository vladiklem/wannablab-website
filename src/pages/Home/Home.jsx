import React, { useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";

import { PlanCard, planTypeEnum } from "components/PlanCard/PlanCard";
import { BasicPlanIcon } from "components/Icons/BasicPlanIcon";
import { ProPlanIcon } from "components/Icons/ProPlanIcon";
import { AllFeaturedPlanIcon } from "components/Icons/AllFeaturedPlanIcon";
import { mediaBreakpointsEnum } from "constants/enums";

import { LeadForm } from "./components/LeadForm/LeadForm";
import { PlansSlider } from "./components/PlansSlider/PlansSlider";

import styles from "./Home.module.scss";

export const Home = () => {
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const onClick = useCallback(() => window.scrollTo(0, 0), []);

    return (
        <div className="container mt-4">
            <div id="lead-form" className={styles.firstSection}>
                <div className="d-flex justify-content-center mt-3">
                    <LeadForm className={styles.leadForm} />
                </div>
            </div>
            {isPortable ? (
                <div id="prices" className={cx("pb-5 pt-2", styles.section)}>
                    <div>
                        <PlansSlider />
                    </div>
                </div>
            ) : (
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
                                "8 спікінг-клабів в групах одного рівня до 4 людей",
                                "inspitation вебінари з цікавими людьми англійською",
                            ]}
                            buttonLabel="Хочу"
                            onClick={onClick}
                            className="mb-4 mr-4 shadow-medium"
                        />
                        <PlanCard
                            title="Pro"
                            price={1850}
                            type={planTypeEnum.PRO}
                            icon={<ProPlanIcon />}
                            description="все що є в Basic"
                            featuresList={[
                                "індивідуальний план розвитку з регулярною перевіркою прогресу",
                                "підписка на Netflix",
                                "командний перегляд серіалів та онлайн-ігри щотижня",
                            ]}
                            buttonLabel="Хочу"
                            onClick={onClick}
                            className="mb-4 mr-4 shadow-medium"
                        />
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
                            onClick={onClick}
                            className="mb-4 mr-4 shadow-medium"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
