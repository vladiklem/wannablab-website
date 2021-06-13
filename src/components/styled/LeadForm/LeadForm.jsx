import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import MaskedInput from "react-input-mask";
import cx from "classnames";

import { Button, Input } from "components/index";
import { Instagram, Telegram } from "components/Icons/social";
import { addLead } from "store/leads/actions";
import { bookTest } from "store/app/actions";
import { instagramLink, telegramLink } from "constants/social";

import styles from "./LeadForm.module.scss";

export const LeadForm = ({ className, description = "", ...props }) => {
    const dispatch = useDispatch();
    const { isLoading, isSuccess } = useSelector((state) => state.leads);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = useCallback(
        (data) => {
            dispatch(addLead(data));
            data.time && dispatch(bookTest(data.time));
        },
        [dispatch],
    );

    return (
        <form
            className={cx("position-relative shadow rounded-xl bg-white", styles.form, className)}
            onSubmit={handleSubmit(onSubmit)}
            {...props}
        >
            <h3 className="regular mb-2">
                {description} {description && <br />} Залиште свої контакти і ми самі
                перетелефонуємо 😃
            </h3>
            <Input className="mx-2" name="name" label="Ім'я" ref={register({ required: true })} />
            <MaskedInput
                mask="+38 (\099) 999 9999"
                maskChar="_"
                alwaysShowMask={false}
                name="phoneNumber"
            >
                {(inputProps) => (
                    <Input
                        type="tel"
                        name="phoneNumber"
                        label="Номер телефону"
                        className="mx-2"
                        ref={register({
                            required: true,
                        })}
                        errorMessage={
                            errors.phoneNumber &&
                            errors.phoneNumber.type === "pattern" &&
                            "Невалідний номер телефону"
                        }
                        {...inputProps}
                    />
                )}
            </MaskedInput>
            <Button
                block
                color="primary-new"
                className={styles.button}
                size="lg"
                type="submit"
                isRounded
                isBold
                isLoading={isLoading}
            >
                Приєднатися
            </Button>
            <div
                className={cx("rounded-xl", styles.successCover, {
                    [styles.isSuccess]: isSuccess,
                    "mt-5": !isSuccess,
                })}
            >
                <p className="regular mb-4">
                    Наш кастомер ловер Марина зателефонує вам протягом 15-ти хвилин ❤️
                </p>
                <p className="regular mb-3">А ось, що ми пропонуємо по контенту:</p>
                <a
                    href={isSuccess ? instagramLink : undefined}
                    className="d-flex align-items-center mb-3 h3"
                >
                    <Instagram height={24} width={24} className="mr-2" /> креативний інгліш
                </a>
                <a
                    href={isSuccess ? telegramLink : undefined}
                    className="d-flex align-items-center h3"
                >
                    <Telegram height={28} width={28} className="mr-1" />
                    фрази на кожен день
                </a>
            </div>
        </form>
    );
};
