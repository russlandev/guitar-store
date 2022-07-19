import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Navigate, Link } from "react-router-dom";
import { login } from "../../redux/actions/authActions";
import { useForm } from "react-hook-form";
import Error from "../HelperComponents/Error";
import styles from "./Form.module.scss";

const FormLogin = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

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
        dispatch(login(data));
        reset();
    };

    return (
        <form
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form__wrapper}
        >
            <div className={styles.form__text}>
                Sign-in or register to watch your order status
            </div>

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
                placeholder={
                    errors?.password?.message
                        ? `Password: ${errors.password.message}`
                        : "Password"
                }
            />
            <div className="ui checkbox">
                <input
                    {...register("remember")}
                    type="checkbox"
                />
                <label className="!text-stone-300">Remember me</label>
            </div>
            {user.err && <Error error={user.err} />}
            <button type="submit">Login</button>
            <Link className={styles.form__link} to="/register">
                Don't have an account?
                <br /> Register
            </Link>
        </form>
    );
};

export default FormLogin;
