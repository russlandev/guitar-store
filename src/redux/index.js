import { configureStore } from "@reduxjs/toolkit";
import itemListSlice from "./reducers/itemListSlice";
import cartSlice from "./reducers/cartSlice";

export default configureStore({
    reducer: {
        itemList: itemListSlice,
        cart: cartSlice,
    },
});
