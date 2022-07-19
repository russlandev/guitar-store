import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { clearCart } from "../../redux/reducers/cartSlice";
import styles from "./Checkout.module.scss";
import Error from "../HelperComponents/Error";
import Loader from "../HelperComponents/Loader";

const Checkout = () => {
    const cart = useSelector((store) => store.cart);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ mode: "onBlur" });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await axios.post(`http://localhost:3001/orders`, {
                user: data,
                order: cart,
                status: "processing",
            });
            dispatch(clearCart());
            navigate("/user-account", { replace: true });
            setLoading(false);
        } catch (err) {
            setErr(err.message);
            setLoading(false);
        }
        reset();
    };

    return (
        <>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                className={styles.checkout__wrapper}
            >
                <div className={styles.checkout__delivery_data}>
                    <div className={styles.checkout__text}>Delivery info</div>
                    <label>
                        Full Name{" "}
                        <span className="text-red-700">
                            {errors?.name?.message}
                        </span>
                    </label>
                    <input
                        {...register("name", {
                            required: "This field is required",
                        })}
                    />

                    <label>
                        Email{" "}
                        <span className="text-red-700">
                            {errors?.email?.message}
                        </span>
                    </label>
                    <input
                        {...register("email", {
                            required: "This field is required",
                            pattern: {
                                value: /@/,
                                message: "Plese enter valid email adress",
                            },
                            value: user.email || "",
                        })}
                    />
                    <label>
                        Phone number{" "}
                        <span className="text-red-700">
                            {errors?.tel?.message}
                        </span>
                    </label>
                    <input
                        {...register("tel", {
                            required: "This field is required",
                            pattern: {
                                value: /^([+]?[0-9\s-\(\)]{3,25})*$/i,
                                message: "Plese enter valid phone number",
                            },
                        })}
                    />
                    <label>
                        Country, City{" "}
                        <span className="text-red-700">
                            {errors?.country?.message}
                        </span>
                    </label>
                    <input
                        {...register("country", {
                            required: "This field is required",
                        })}
                    />
                    <label>
                        Adress{" "}
                        <span className="text-red-700">
                            {errors?.adress?.message}
                        </span>
                    </label>
                    <input
                        {...register("adress", {
                            required: "This field is required",
                        })}
                    />
                    <label>
                        ZIP / Postcode{" "}
                        <span className="text-red-700">
                            {errors?.zip?.message}
                        </span>
                    </label>
                    <input
                        {...register("zip", {
                            required: "This field is required",
                            pattern: {
                                value: /^\d{5}$/,
                                message: "Should include 5 symbols",
                            },
                        })}
                    />
                </div>
                <div className={styles.checkout__cart}>
                    <div className={styles.checkout__text}>Your cart</div>
                    {cart.cartItems.map((item) => (
                        <div
                            key={item.item.id}
                            className={styles.checkout__item}
                        >
                            <Link
                                to={`/list/${item.item.category}/item/${item.item.id}`}
                            >
                                <img alt="img" src={item.item.img} />
                            </Link>
                            <div>
                                <Link
                                    to={`/list/${item.item.category}/item/${item.item.id}`}
                                >
                                    {item.item.name}
                                </Link>
                                <div>{`$${item.item.price} x ${item.amount}`}</div>
                            </div>
                        </div>
                    ))}
                    <div className={styles.checkout__text}>
                        Total price: ${cart.totalPrice}
                    </div>
                </div>
                <div className={styles.checkout__payment}>
                    {err ? (
                        <Error error={err} />
                    ) : (
                        <button type="submit">
                            {loading ? <Loader /> : "Place an order"}
                        </button>
                    )}
                </div>
            </form>
        </>
    );
};

export default Checkout;
