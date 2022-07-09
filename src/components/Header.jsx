import React, { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="mb-16">
            <div className="fixed top-0 w-full z-50">
                <div className={styles.header}>
                    <div className={styles.wrapper}>
                        <a className={styles.logo} href="#">
                            LOGO
                        </a>
                        <ul>
                            <li className={styles.header__item}>
                                <a href="#">GUITARS</a>
                            </li>
                            <li className={styles.header__item}>
                                <a href="#">BASSES</a>
                            </li>
                            <li className={styles.header__item}>
                                <a href="#">ACCESORIES</a>
                            </li>
                        </ul>
                        <ul className="right-0 absolute mr-8">
                            <li className={styles.header__item}>
                                <a href="#">SIGN IN</a>
                            </li>
                            <li className={styles.header__item}>
                                <a href="#">
                                    <i className="cart icon"></i>
                                </a>
                            </li>
                        </ul>
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
                        <a className={styles.logo} href="#">
                            LOGO
                        </a>
                        <a href="#" className={styles.menu__btn}>
                            <i className="cart icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="fixed top-20 z-50 w-0">
                <ul
                    className={`${styles.menu__list} ${
                        open ? styles.menu__open : styles.menu__close
                    }`}
                >
                    <li className={styles.menu__item}>
                        <a href="#">GUITARS</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="#">BASSES</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="#">ACCESORIES</a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="#">SIGN IN</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
