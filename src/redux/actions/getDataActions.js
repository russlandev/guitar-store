import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
    "itemList/getData",
    async function ({category}, { rejectWithValue, dispatch, getState }) {
        try {
            const response = await axios.get(`http://localhost:3001/items?category=${category}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const tagSearch = createAsyncThunk(
    "itemList/tagSearch",
    async function ({category,tag}, { rejectWithValue, dispatch, getState }) {
        try {
            const response = await axios.get(`http://localhost:3001/items?category=${category}&tags_like=${tag}`);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

