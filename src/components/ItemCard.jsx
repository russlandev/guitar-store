import React from "react";
import styles from "./ItemCard.module.scss";

const ItemCard = ({guitar}) => {
    return (
        <div className={styles.item}>
        <div className={styles.item__card}>
            <a href="#" className={styles.item__img}>
                <img src={guitar.img[0]} alt="img" />
                <div>{guitar.name}</div>
            </a>
            <div
                className={
                    guitar.inStock ? styles.item__instock : styles.item__soldout
                }
            >
                {guitar.inStock ? "In Stock" : "Sold out"}
            </div>
        </div>
            <div className={styles.item__tocart}>
                <div>${guitar.price}</div>
                <button>{guitar.inStock ? 'TO CART' : 'PRE-ORDER'}</button>
            </div>
        </div>
    );
};

export default ItemCard;
