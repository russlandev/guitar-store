import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Navigate, Link } from "react-router-dom";
import { registerNewUser } from "../../redux/actions/authActions";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import Error from "../HelperComponents/Error";

const FormRegister = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ mode: "onBlur" });

    if (user.email) {
        return <Navigate to="/user-account" replace={true} />;
    }

    const onSubmit = (data) => {
        if (data.password === data.repeatPassword)
            dispatch(registerNewUser(data));
        reset();
    };

    return (
        <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
            className={styles.form__wrapper}
        >
            {user.err && <Error error={user.err} />}
            <input
                {...register("id", { required: "This field is required" })}
                type="id"
                placeholder={
                    errors?.id?.message
                        ? `Username: ${errors.id.message}`
                        : "Username"
                }
            />
            <input
                {...register("email", { required: "This field is required" })}
                type="email"
                placeholder={
                    errors?.email?.message
                        ? `Email: ${errors.email.message}`
                        : "Email"
                }
            />
            <input
                {...register("password", {
                    required: "This field is required",
                })}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder={
                    errors?.password?.message
                        ? `Password: ${errors.password.message}`
                        : "Password"
                }
            />
            <input
                {...register("repeatPassword", {
                    required: "This field is required",
                })}
                type="password"
                onChange={(e) => setRepeatPassword(e.target.value)}
                placeholder={
                    errors?.repeatPassword?.message
                        ? `Repeat password: ${errors.repeatPassword.message}`
                        : "Repeat password"
                }
            />
            <div className="ui checkbox">
                <input {...register("remember")} type="checkbox" />
                <label className="!text-stone-300">Remember me</label>
            </div>
            <div className={styles.form__pass_status}>
                {password !== repeatPassword &&
                    "Please repeat the password correctly"}
            </div>
            <button type="submit">Register</button>
            <Link className={styles.form__link} to="/sign-in">
                Already have an account? <br /> Login
            </Link>
        </form>
    );
};

export default FormRegister;
