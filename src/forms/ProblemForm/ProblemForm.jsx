import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

import { Input } from "components/index";

export const ProblemForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input ref={register()} name="description" placeholder="Опис проблеми" tag="textarea" />
            {/* TODO: Finish problem form */}

            {/* <Button></Button> */}
        </form>
    );
};
