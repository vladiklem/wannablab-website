import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";

import { Input, CustomSelect, Button } from "components/index";
import { selectBudget } from "store/app/selectors";
import { CurrentBudget } from "./CurrentBudget/CurrentBudget";
import { FormWrapper } from "forms/FormWrapper/FormWrapper";
import { formModeEnum } from "constants/enums";
import { FormFields } from "./FormFields/FormFields";

export const BudgetDashboard = () => {
    const budget = useSelector(selectBudget);
    const [formMode, setFormMode] = useState(formModeEnum.CREATE);
    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    const togglePaymentForm = useCallback(() => {
        setIsOpen(open => !open);
    }, [setIsOpen]);

    return (
        <div className="container">
            <CurrentBudget />
            <div>
                <Button onClick={togglePaymentForm}>Add regular payment</Button>
                <FormWrapper
                    onSubmit={onSubmit}
                    isOpen={isOpen}
                    form={formMode}
                    title="Регулярний платіж"
                    toggle={togglePaymentForm}
                >
                    <FormFields />
                </FormWrapper>
            </div>
        </div>
    );
};
