import React from "react";
import Slider from "./Slider";
import { guitars } from "../data/mockedData";
import styles from "./ItemPage.module.scss";

const ItemPage = () => {
    const guitar = guitars[4];
    return (
        <div className={styles.itempage__wrapper}>
            <div className={styles.itempage__slider}>
                <Slider guitar={guitar} sliderWidth={450} />
            </div>
            <div className={styles.itempage__details}>
                <h2 className={styles.item__title}>{guitar.name}</h2>
            </div>
        </div>
    );
};

export default ItemPage;
