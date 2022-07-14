import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addItemToCart(state, action) {
            if (
                state.cartItems.find(
                    (item) => item.item.id === action.payload.id
                )
            ) {
                state.cartItems[
                    state.cartItems.findIndex(
                        (item) => item.item.id === action.payload.id
                    )
                ].amount++;
            } else {
                state.cartItems = [
                    ...state.cartItems,
                    { amount: 1, item: action.payload },
                ];
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(
                (item) => item.item.id !== action.payload.id
            );
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        amountChange(state, action) {
            if (action.payload.param) {
                state.cartItems[
                    state.cartItems.findIndex(
                        (item) => item.item.id === action.payload.id
                    )
                ].amount++;
            } else {
                if (
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
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        getCartFromLocalStorage(state, action) {
            state.cartItems = action.payload.cart;
        },
    },
});

export const {
    addItemToCart,
    removeItemFromCart,
    amountChange,
    getCartFromLocalStorage,
} = cartSlice.actions;

export default cartSlice.reducer;
