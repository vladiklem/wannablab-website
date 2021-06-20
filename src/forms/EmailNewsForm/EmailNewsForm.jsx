import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

import { Input, Button } from "components/index";

export const EmailNewsForm = ({ className }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            <label htmlFor="email" className="font-weight-semibold mb-1">
                Хочу бути в курсі всього
            </label>
            <div className="d-flex">
                <Input
                    ref={register({
                        pattern: "[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+",
                    })}
                    name="email"
                    type="email"
                    className="regular mr-2"
                    placeholder="exaple@gmail.com"
                    alternative
                />
                <Button size="sm" color="green" type="submit">
                    Підписатися
                </Button>
            </div>
        </form>
    );
};
