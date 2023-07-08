import { useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

// Less code (c)
// Better validation
// Better Errors (set, clear, display)
// Have control over inputs
// Dont deal with events
// easier Inputs (c)  c54v6b 7

interface LoginForm {
    username: string;
    password: string;
    email?: string;
    errors?: string;
}

export default function Forms() {
    const {
        register
        , handleSubmit
        , formState: { errors }
        , watch
        , setValue
        , setError
        , reset
        , resetField
    } = useForm<LoginForm>({
        mode: "onBlur",
    });

    const onValid = (data: LoginForm) => {
        console.log("I'm valid on");
        // setError("errors", { message: "Backed is offline sorry." })
        // setValue("username", "hello")
        reset();
    };
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors);
    }
    useEffect(() => {

    })
    return (
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input
                {...register("username", {
                    required: "Username is required",
                    minLength: {
                        message: "The username should be longer than 5 chars.",
                        value: 5,
                    }
                })}
                type="text"
                placeholder="Username"
            />
            {errors.username?.message}
            <input
                {...register("email", {
                    required: "Email is required",
                    validate: {
                        notGmail: (value) => !value?.includes("@gmail.com") || "Gmail is not allowed"
                    }
                })}
                type="text"
                placeholder="Email"
                className={`${Boolean(errors.email) ? "border-red-500" : ""}`}
            />
            {errors.email?.message}
            <input
                {...register("password", {
                    required: "Password is required"
                })}
                type="password"
                placeholder="Password"
            />
            {errors.password?.message}
            <input type="submit" value="Create Account" required />
            {errors.errors?.message}
        </form>
    );
}
