import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className="fixed top-0 w-full">
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
                        <li className={styles.header__item}>
                            <a href="#">SIGN IN</a>
                        </li>
                        <li className={styles.header__item}>
                            <a href="#">CART</a>
                        </li>
                    </ul>
                    <ul className="right-0 absolute mr-8">
                        <li className={styles.header__item}>
                            <a href="#">SIGN IN</a>
                        </li>
                        <li className={styles.header__item}>
                            <a href="#">CART</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
