import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import MaskedInput from "react-input-mask";
import cx from "classnames";

import { Button, buttonColorEnum, Input } from "components/index";
import { SuccessIcon } from "components/Icons/SuccessIcon";
import { Instagram, Telegram } from "components/Icons/social";
import { addLead } from "store/leads/actions";
import { bookTest } from "store/general/actions";
import { instagramLink } from "constants/social";

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
            className={cx("position-relative", styles.form, className)}
            onSubmit={handleSubmit(onSubmit)}
            {...props}
        >
            <h2 className="h2 mb-2 text-center text-gray-900">Привіт, блабер!</h2>
            <h3 className="h3 mb-3">{description} <br/> Залиште свої контакти і ми самі перетелефонуємо 😃</h3>
            <Input name="name" label="Ім'я" ref={register({ required: true })} />
            <MaskedInput
                mask="+38 (\099) 999 9999"
                maskChar="_"
                alwaysShowMask={false}
                name="phoneNumber"
            >
                {(inputProps) => (
                    <Input
                        name="phoneNumber"
                        label="Номер телефону"
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
                color={buttonColorEnum.SUCCESS_GRADIENT}
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
                className={cx(
                    "d-flex align-items-center justify-content-center flex-column rounded",
                    styles.successCover,
                    { [styles.isSuccess]: isSuccess, "mt-5": !isSuccess },
                )}
            >
                <div className="d-flex align-items-center text-green-500 mb-2">
                    <SuccessIcon height={24} width={24} fill="#19bf33" className="mr-2" /> Готово
                </div>
                <a
                    href={isSuccess ? instagramLink : undefined}
                    className="d-flex align-items-center text-gray-900 mb-2"
                >
                    <Instagram height={24} width={24} className="mr-2" /> @eng.wannablab
                </a>
                <div className="d-flex align-items-center text-gray-900">
                    <Telegram height={28} width={28} className="mr-2" />
                    @wannablab_love
                </div>
            </div>
        </form>
    );
};
