import React from "react";
import styles from './Footer.module.scss';

const Footer =() => {
    return (
        <div className={styles.footer__wrapper}>
            <div className={styles.footer__block}>
                <h4>Contact us</h4>
                <a href="#">+12 345 6789012</a>
                <a href="#">examplemail@example.mail</a>
            </div>
            <div className={styles.footer__block}>
                <h4>Customer service</h4>
                <a href="#">contact us</a>
                <a href="#">ordering and payment</a>
                <a href="#">shipping</a>
            </div>
            <div className={styles.footer__block}>
                <h4>Information</h4>
                <a href="#">about strandberg</a>
                <a href="#">work with us</a>
                <a href="#">privacy policy</a>
            </div>
            <div className={styles.footer__block}>
                <h4>subscribe to newsletter</h4>
                <span>Ensure that you are up-to-date with news and developments</span>
                <form>
                    <input placeholder="Enter your email" type='email'></input>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        
    )
};

export default Footer;