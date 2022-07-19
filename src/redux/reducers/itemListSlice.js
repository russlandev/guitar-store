import { createSlice } from "@reduxjs/toolkit";
import { getData, tagSearch } from "../actions/getDataActions";

const parsePrice = (price) => {
    return parseInt(price.replace(/[\s.,%]/g, "").slice(0, -2));
};

const itemListSlice = createSlice({
    name: "itemList",
    initialState: {
        fetchedItems: [],
        itemsToRender: [],
        isLodaing: false,
        err: null,
    },
    reducers: {
        stringsFilter(state, action) {
            state.itemsToRender = state.fetchedItems.filter((item) =>
                action.payload.str.includes(item.str)
            );
            if (!action.payload.str.length)
                state.itemsToRender = [...state.fetchedItems];
        },

        inStockFilter(state) {
            state.itemsToRender = state.itemsToRender.filter(
                (item) => item.inStock
            );
        },

        priceSort(state, action) {
            if (action.payload.lowerFirst) {
                state.itemsToRender.sort(
                    (a, b) => parsePrice(a.price) - parsePrice(b.price)
                );
            }
            if (action.payload.higherFirst) {
                state.itemsToRender.sort(
                    (a, b) => parsePrice(b.price) - parsePrice(a.price)
                );
            }
        },
    },
    extraReducers: {
        [getData.pending]: (state) => {
            state.err = null;
            state.isLodaing = true;
        },
        [getData.fulfilled]: (state, action) => {
            state.fetchedItems = action.payload;
            state.itemsToRender = action.payload;
            state.err = null;
            state.isLodaing = false;
        },
        [getData.rejected]: (state, action) => {
            state.err = action.payload;
            state.fetchedItems = [];
            state.itemsToRender = [];
            state.isLodaing = false;
        },
        [tagSearch.pending]: (state) => {
            state.err = null;
            state.isLodaing = true;
        },
        [tagSearch.fulfilled]: (state, action) => {
            state.fetchedItems = action.payload;
            state.itemsToRender = action.payload;
            state.err = null;
            state.isLodaing = false;
        },
        [tagSearch.rejected]: (state, action) => {
            state.err = action.payload;
            state.fetchedItems = [];
            state.itemsToRender = [];
            state.isLodaing = false;
        },
    },
});

export const { stringsFilter, inStockFilter, priceSort } =
    itemListSlice.actions;

export default itemListSlice.reducer;
