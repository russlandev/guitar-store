import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useLocation, Navigate, Link } from "react-router-dom";
import { register } from "../../redux/actions/authActions";
import styles from "./Form.module.scss";
import Error from "../HelperComponents/Error";

const FormRegister = ({ title }) => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const location = useLocation();
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    if (user.email) {
        return <Navigate to="/user-account" state={{ from: location }} />;
    }

    const handleSubmit = (e, email, password, id) => {
        e.preventDefault();
        if (password === repeatPassword)
            dispatch(register({ email, password, id }));
        if (user.id) {
            setEmail("");
            setPassword("");
            setId("");
            setRepeatPassword("");
        }
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e, email, password, id)}
            className={styles.form__wrapper}
        >
            {user.err && <Error error={user.err} />}
            <input
                type="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Username"
            ></input>
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
            <input
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                placeholder="Repeat password"
            ></input>
            <div className={styles.form__pass_status}>
                {password !== repeatPassword &&
                    "Please repeat the password correctly"}
            </div>
            <button onClick={(e) => handleSubmit(e, email, password, id)}>
                {title}
            </button>
            <div className="ui checkbox">
                <input type="checkbox" name="example" />
                <label className="!text-stone-300">Remember me</label>
            </div>
            <Link className={styles.form__link} to="/sign-in">
                Already have an account? <br /> Login
            </Link>
        </form>
    );
};

export default FormRegister;
