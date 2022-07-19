import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { NavLink, Link, useLocation } from "react-router-dom";
import { getCartFromLocalStorage } from "../../redux/reducers/cartSlice";
import { login } from "../../redux/actions/authActions";
import styles from "./Header.module.scss";

const Header = () => {
    const [open, setOpen] = useState(false);
    const cart = useSelector((store) => store.cart.cartItems);
    const user = useSelector((store) => store.user);
    // это можно написать как const {cart, user} = useSelector((store) => store) и для карта потом достать cartItems
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        // Signing-in user if he clicked 'remember me' or refreshed the page during one session
        if (JSON.parse(localStorage.getItem("user"))) {
            dispatch(login(JSON.parse(localStorage.getItem("user"))));
        } else if (JSON.parse(sessionStorage.getItem("user"))) {
            dispatch(login(JSON.parse(sessionStorage.getItem("user"))));
        }
        // Taking cart from localStorage if we have it
        if (JSON.parse(localStorage.getItem("cart"))) {
            dispatch(
                getCartFromLocalStorage({
                    cart: JSON.parse(localStorage.getItem("cart")),
                })
            );
        }
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    //засунь это в app.tsx
    

    return (
        <header className="mb-[59px]">
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
                                to="user-account"
                                className={styles.header__item}
                            >
                                <div>{user.id ? "MY ACCOUNT" : "SIGN IN"}</div>
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
                        to="user-account"
                        className={styles.menu__item}
                    >
                        <div>{user.id ? "MY ACCOUNT" : "SIGN IN"}</div>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
