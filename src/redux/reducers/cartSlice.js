import { createSlice } from "@reduxjs/toolkit";

const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    cart.forEach((item) => {
        for (let i = 1; i <= item.amount; i++) {
            totalPrice += parseInt(
                item.item.price.replace(/[\s.,%]/g, "").slice(0, -2)
            );
        }
    });
    const totalPriceString = `${totalPrice.toString().slice(0, -3)},${totalPrice
        .toString()
        .slice(-3)}.00`;
    return totalPriceString;
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalPrice: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            state.cartItems = [
                ...state.cartItems,
                { amount: 1, item: action.payload },
            ];
            state.totalPrice = calculateTotalPrice(state.cartItems);
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(
                (item) => item.item.id !== action.payload.id
            );
            state.totalPrice = calculateTotalPrice(state.cartItems);
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        amountChange(state, action) {
            if (action.payload.boolean) {
                state.cartItems[
                    state.cartItems.findIndex(
                        (item) => item.item.id === action.payload.id
                    )
                ].amount++;
            } else if (
                state.cartItems[
                    state.cartItems.findIndex(
                        (item) => item.item.id === action.payload.id
                    )
                ].amount > 1
            ) {
                state.cartItems[
                    state.cartItems.findIndex(
                        (item) => item.item.id === action.payload.id
                    )
                ].amount--;
            }

            state.totalPrice = calculateTotalPrice(state.cartItems);
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        getCartFromLocalStorage(state, action) {
            state.cartItems = action.payload.cart;
            state.totalPrice = calculateTotalPrice(state.cartItems);
        },
        clearCart(state) {
            state.cartItems = [];
            state.totalPrice = 0;
            localStorage.removeItem("cart");
        },
    },
});

export const {
    addItemToCart,
    removeItemFromCart,
    amountChange,
    getCartFromLocalStorage,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
