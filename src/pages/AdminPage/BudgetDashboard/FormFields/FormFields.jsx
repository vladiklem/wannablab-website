import React from "react";

import { Input, CustomSelect } from "components/index";
import { levelOptions, sourceOptions } from "constants/options";

// import { admins, }

export const FormFields = ({
    register, errors,
}) => {
    return (
        <div>
            <CustomSelect
                name="reciever"
                ref={register}
                options={levelOptions.map((item) => ({ label: item, value: item }))}
                label="Рівень наразі"
            />
            <Input
                label="Повне ім'я"
                name="fullName"
                id="fullName"
                ref={register({
                    required: true,
                    minLength: 3,
                    maxLength: 20,
                })}
                errorMessage={errors.fullName && "Невалідне ім'я"}
            />
            <Input
                label="Нік"
                name="username"
                id="username"
                ref={register({
                    required: true,
                    minLength: 3,
                    maxLength: 20,
                })}
                errorMessage={errors.username && "Невалідний нік"}
            />
            <Input
                label="E-мило"
                name="email"
                id="email"
                ref={register({
                    pattern: /(|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(|$)/i,
                })}
                errorMessage={errors.email && "Невалідне Е-мило"}
            />
            <Input
                label="Номер телефону"
                name="phoneNumber"
                id="phoneNumber"
                ref={register({
                    pattern: /((\+38)?\(?\d{3}\)?[\s-]?(\d{7}|\d{3}[\s-]\d{2}[\s-]\d{2}|\d{3}-\d{4}))/,
                })}
                errorMessage={errors.phoneNumber && "Невалідний номер телефону"}
            />
            <CustomSelect
                name="engLevel"
                ref={register}
                options={levelOptions.map((item) => ({ label: item, value: item }))}
                label="Рівень наразі"
            />
            <CustomSelect
                name="source"
                ref={register}
                options={sourceOptions}
                label="Звідки прийшов"
            />
            <Input label="Дата наступної оплати" name="chargeDate" type="date" />
            <Input label="Сума до сплати" name="chargeSum" type="number" />
            <Input
                label="Опис"
                name="description"
                id="description"
                ref={register({ maxLength: 500 })}
                tag="textarea"
                errorMessage={errors.description && "Максимальна довжина - 500 символів"}
            />
        </div>
    );
};
