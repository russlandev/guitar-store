import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { NavLink, Link } from "react-router-dom";
import { getCartFromLocalStorage } from "../redux/reducers/cartSlice";
import styles from "./Header.module.scss";

const Header = () => {
    const [open, setOpen] = useState(false);
    const cart = useSelector((store) => store.cart.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        // Taking cart from localStorage if we have it
        if (JSON.parse(localStorage.getItem("cart")).length) {
            dispatch(
                getCartFromLocalStorage({
                    cart: JSON.parse(localStorage.getItem("cart")),
                })
            );
        }
    }, [dispatch]);

    return (
        <header className="mb-20">
            <div className="fixed top-0 w-full z-50">
                <div className={styles.header}>
                    <div className={styles.wrapper}>
                        <Link className={styles.logo} to="/">
                            LOGO
                        </Link>
                        <menu>
                            <NavLink to="/" className={styles.header__item}>
                                <div>HOME</div>
                            </NavLink>
                            <NavLink
                                to="list/guitars"
                                className={styles.header__item}
                            >
                                <div>GUITARS</div>
                            </NavLink>
                            <NavLink
                                to="list/basses"
                                className={styles.header__item}
                            >
                                <div>BASSES</div>
                            </NavLink>
                            <NavLink
                                to="list/accesories"
                                className={styles.header__item}
                            >
                                <div>ACCESORIES</div>
                            </NavLink>
                        </menu>
                        <menu className="right-0 absolute mr-8">
                            <NavLink
                                to="sign-in"
                                className={styles.header__item}
                            >
                                <div>SIGN IN</div>
                            </NavLink>
                            <NavLink to="cart" className={styles.header__item}>
                                <div>
                                    <i className="cart icon"></i>
                                    {cart.length ? cart.length : ""}
                                </div>
                            </NavLink>
                        </menu>
                    </div>
                </div>
                <div className={styles.menu}>
                    <div className={styles.mobile__header}>
                        <div
                            className={`${styles.menu__btn} ${
                                open ? styles.btn__open : styles.btn__close
                            }`}
                            onClick={() => setOpen(!open)}
                        >
                            <i className="bars icon"></i>
                        </div>
                        <Link className={styles.logo} to="/">
                            LOGO
                        </Link>
                        <NavLink to="cart" className={styles.menu__btn}>
                            <i className="cart icon"></i>
                            <span>{cart.length ? cart.length : ""}</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="fixed top-20 z-50 w-0">
                <div
                    className={`${styles.menu__list} ${
                        open ? styles.menu__open : styles.menu__close
                    }`}
                >
                    <NavLink
                        onClick={() => setOpen(!open)}
                        to="/"
                        className={styles.menu__item}
                    >
                        <div>HOME</div>
                    </NavLink>
                    <NavLink
                        onClick={() => setOpen(!open)}
                        to="list/guitars"
                        className={styles.menu__item}
                    >
                        <div>GUITARS</div>
                    </NavLink>
                    <NavLink
                        onClick={() => setOpen(!open)}
                        to="list/basses"
                        className={styles.menu__item}
                    >
                        <div>BASSES</div>
                    </NavLink>
                    <NavLink
                        onClick={() => setOpen(!open)}
                        to="list/accesories"
                        className={styles.menu__item}
                    >
                        <div>ACCESORIES</div>
                    </NavLink>
                    <NavLink
                        onClick={() => setOpen(!open)}
                        to="sign-in"
                        className={styles.menu__item}
                    >
                        <div>SIGN IN</div>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
