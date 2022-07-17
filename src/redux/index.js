import { configureStore } from "@reduxjs/toolkit";
import itemListSlice from "./reducers/itemListSlice";
import cartSlice from "./reducers/cartSlice";
import userSlice from "./reducers/userSlice";

export default configureStore({
    reducer: {
        itemList: itemListSlice,
        cart: cartSlice,
        user: userSlice,
    },
});
