import React from "react";
import Slider from "./Slider";
import { guitars } from "../data/mockedData";
import styles from "./ItemPage.module.scss";

const ItemPage = () => {
    const guitar = guitars[7];
    return (
        <div className={styles.itempage__wrapper}>
            <div className={styles.item__main}>
                <div className={styles.item__slider}>
                    <Slider guitar={guitar} sliderWidth={450} />
                </div>
                <div className={styles.item__details}>
                    <h2 className={styles.item__title}>{guitar.name}</h2>
                    <a href="#">
                        <div className={styles.item__tag}>
                            {guitar.filters.type} Series
                        </div>
                    </a>
                    <a href="#">
                        <div className={styles.item__tag}>
                            {guitar.filters.wood}
                        </div>
                    </a>
                    <a href="#">
                        <div className={styles.item__tag}>
                            Pickups: {guitar.filters.pickups}
                        </div>
                    </a>
                    <a href="#">
                        <div className={styles.item__tag}>
                            {guitar.filters.str}-String
                        </div>
                    </a>
                    <p className={styles.item__descr}>{guitar.descr}</p>
                    <div className={styles.item__actions}>
                        <div className={styles.item__price}>
                            <h2>${guitar.price}</h2>
                            <div
                                className={
                                    guitar.inStock
                                        ? "text-green-500"
                                        : "text-stone-500"
                                }
                            >
                                {" "}
                                {guitar.inStock ? "In Stock" : "Sold out"}
                            </div>
                        </div>
                        <button>
                            {guitar.inStock ? "ADD TO CART" : "PRE-ORDER"}
                            <i className="cart arrow down icon"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.item__specs}>
                <div>
                    <h4>General</h4>
                    <ul>
                        {guitar.specs.general.map((text, i) => {
                            return <li key={i}>{text}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h4>Neck</h4>
                    <ul>
                        {guitar.specs.neck.map((text, i) => {
                            return <li key={i}>{text}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h4>Profile</h4>
                    <ul>
                        {guitar.specs.profile.map((text, i) => {
                            return <li key={i}>{text}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className={styles.item__size}>
                <img src={guitar.sizeImg}></img>
                <ul>
                    {guitar.specs.size.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ItemPage;
