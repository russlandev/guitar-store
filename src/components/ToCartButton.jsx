import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addItemToCart } from "../redux/reducers/cartSlice";

const ToCartButton = ({ item }) => {
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cart.cartItems);
    // console.log(item.inStock)
    // console.log(cart.find((cartItem) => cartItem.id === item.id))

    return item.inStock ? (
        <button
            disabled={cart.find((cartItem) => cartItem.item.id === item.id)}
            onClick={() =>
                dispatch(
                    addItemToCart({
                        id: item.id,
                        price: item.price,
                        img: item.img[0],
                        category: item.category,
                        name: item.name,
                    })
                )
            }
        >
            {cart.find((cartItem) => cartItem.item.id === item.id)
                ? "IN CART"
                : "ADD TO CART"}
            <i className="cart arrow down icon"></i>
        </button>
    ) : (
        <button
        // disabled={cart.find((cartItem) => cartItem.id === item.id)}
        // onClick={() => dispatch(addItemToCart({ item: item.name }))}
        >
            PRE-ORDER
        </button>
    );
};

export default ToCartButton;
