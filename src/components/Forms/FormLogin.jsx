import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useLocation, Navigate, Link } from "react-router-dom";
import { login } from "../../redux/actions/authActions";
import Error from "../HelperComponents/Error";
import styles from "./Form.module.scss";

const FormLogin = ({ title }) => {
    const location = useLocation();
    const user = useSelector((store) => store.user);
    const [remember, setRemember] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    if (user.email) {
        return <Navigate to="/user-account" state={{ from: location }} />;
    }

    const handleSubmit = (e, email, password) => {
        e.preventDefault();
        remember
            ? localStorage.setItem("user", JSON.stringify({ email, password }))
            : sessionStorage.setItem(
                  "user",
                  JSON.stringify({ email, password })
              );

        dispatch(login({ email, password }));
        setEmail("");
        setPassword("");
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e, email, password)}
            className={styles.form__wrapper}
        >
            <div className={styles.form__text}>
                Sign-in or register to watch your order status
            </div>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            ></input>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            ></input>
            {user.err && <Error error={user.err} />}
            <button onClick={(e) => handleSubmit(e, email, password)}>
                {title}
            </button>
            <div className="ui checkbox">
                <input
                    type="checkbox"
                    value={remember}
                    onChange={() => setRemember(!remember)}
                />
                <label className="!text-stone-300">Remember me</label>
            </div>
            <Link className={styles.form__link} to="/register">
                Don't have an account?
                <br /> Register
            </Link>
        </form>
    );
};

export default FormLogin;
