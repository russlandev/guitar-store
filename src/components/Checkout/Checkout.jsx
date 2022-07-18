import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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

    // controlled inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState(user.email ? user.email : "");
    const [tel, setTel] = useState("");
    const [country, setCountry] = useState("");
    const [adress, setAdress] = useState("");
    const [zip, setZip] = useState("");

    const handleSubmit = async () => {
        setLoading(true);
        try {
            await axios.post(`http://localhost:3001/orders`, {
                user: { name, email, tel, country, adress, zip },
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
    };

    return (
        <>
            <div className={styles.checkout__wrapper}>
                <div className={styles.checkout__delivery_data}>
                    <div className={styles.checkout__text}>Delivery info</div>
                    <div>Full Name</div>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                    />{" "}
                    <div>Email</div>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                    />
                    <div>Phone Number</div>
                    <input
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        type="tel"
                    />
                    <div>Country, City</div>
                    <input
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        type="text"
                    />
                    <div>Adress</div>
                    <input
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                        type="text"
                    />
                    <div>ZIP Postcode</div>
                    <input
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        type="number"
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
                        <button
                            disabled={
                                !(email && tel && country && adress && zip)
                            }
                            onClick={handleSubmit}
                        >
                            {loading ? (
                                <Loader />
                            ) : email && tel && country && adress && zip ? (
                                "Place an order"
                            ) : (
                                "Enter all data"
                            )}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Checkout;
