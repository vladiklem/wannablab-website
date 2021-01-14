import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import cx from "classnames";

import { Button, buttonColorEnum, Input, Checkbox, Radio } from "components/index";
import { SuccessIcon } from "components/Icons/SuccessIcon";
import { Instagram, Telegram } from "components/Icons/social";
import { addLead } from "store/leads/actions";
import { bookTest } from "store/general/actions";
import { getTestTimeLabel } from "helpers/date";
import { instagramLink } from "constants/social";

import styles from "./LeadForm.module.scss";

export const LeadForm = ({ className }) => {
    const dispatch = useDispatch();
    const { isLoading, isSuccess } = useSelector((state) => state.leads);
    const testTime = useSelector((state) => state.general.testTime);

    const { register, handleSubmit, watch, errors } = useForm();

    const hasFreeTime = useMemo(
        () => testTime && testTime.length && testTime.reduce((acc, { isBooked }) => acc || !isBooked, true),
        [testTime],
    );

    const isTestChecked = watch("withTest");

    const onSubmit = useCallback(
        (data) => {
            dispatch(addLead(data));
            data.time && dispatch(bookTest(data.time));
        },
        [dispatch],
    );

    return (
        <form
            className={cx("position-relative rounded", styles.form, className)}
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className="text-center text-gray-900">Новий блабер</h2>
            <Input name="name" label="Ім'я" ref={register({ required: true })} />
            <Input
                name="phoneNumber"
                label="Номер телефону"
                ref={register({
                    required: true,
                    pattern: /((\+38)?\(?\d{3}\)?[\s-]?(\d{7}|\d{3}[\s-]\d{2}[\s-]\d{2}|\d{3}-\d{4}))/,
                })}
                errorMessage={
                    errors.phoneNumber &&
                    errors.phoneNumber.type === "pattern" &&
                    "Невалідний номер телефону"
                }
            />
            {!!hasFreeTime && (
                <Checkbox
                    className="mt-3"
                    name="withTest"
                    label="Одразу вибрати час для тесту рівня"
                    ref={register}
                />
            )}
            <div
                className={cx(styles.withTestCover, {
                    [styles.isTestChecked]: isTestChecked,
                    [styles.testNotChecked]: !isTestChecked,
                })}
            >
                <div className={cx("d-flex align-items-center flex-wrap", styles.testTimeList)}>
                    {testTime.map(({ id, dateTime, isBooked }) =>
                        !isBooked ? (
                            <Radio
                                className="ml-2 mb-2"
                                name="time"
                                key={id}
                                id={id}
                                value={id}
                                label={getTestTimeLabel(dateTime)}
                                ref={register}
                            />
                        ) : null,
                    )}
                </div>
            </div>
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
