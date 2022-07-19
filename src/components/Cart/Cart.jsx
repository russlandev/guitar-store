import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";
import {
    amountChange,
    removeItemFromCart,
} from "../../redux/reducers/cartSlice";



const Cart = () => {
    const cart = useSelector((store) => store.cart);
    
    const dispatch = useDispatch();

    return (
        <div className={styles.cart__wrapper}>
            {cart.cartItems.length ? (
                cart.cartItems.map((item) => (
                    <div className={styles.cart__item} key={item.item.id}>
                        <div className={styles.item__details}>
                            <Link
                                to={`/list/${item.item.category}/item/${item.item.id}`}
                            >
                                <img alt="img" src={item.item.img} />
                            </Link>
                            <div>
                                <Link
                                    to={`/list/${item.item.category}/item/${item.item.id}`}
                                    className={styles.item__name}
                                >
                                    {item.item.name}
                                </Link>
                                <div className={styles.item__price}>
                                    ${item.item.price}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className={styles.item__amount}>
                                <i
                                    onClick={() =>
                                        dispatch(
                                            amountChange({
                                                boolean: true,
                                                id: item.item.id,
                                            })
                                        )
                                    }
                                    className="plus icon"
                                ></i>
                                <span>{item.amount} pcs</span>
                                <i
                                    onClick={() =>
                                        dispatch(
                                            amountChange({
                                                param: false,
                                                id: item.item.id,
                                            })
                                        )
                                    }
                                    className="minus icon"
                                ></i>
                            </div>
                            <div
                                onClick={() =>
                                    dispatch(
                                        removeItemFromCart({ id: item.item.id })
                                    )
                                }
                                className={styles.item__remove}
                            >
                                <i className="trash icon"></i>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className={styles.cart__empty}>Your cart is empty</div>
            )}
            <div className={styles.cart__checkout}>
                <div className={styles.cart__total}>
                    Total: ${cart.totalPrice}
                </div>
                {cart.cartItems.length ? (
                    <Link to='/checkout'>
                        <button className={styles.cart__button}>
                            Checkout
                            <i className="long arrow alternate right icon"/>
                        </button>
                    </Link>
                ) : null}
            </div>
        </div>
    );
};

export default Cart;
