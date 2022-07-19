import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    "user/login",
    async function ({ email, password }, { rejectWithValue }) {
        if (email === "")
            // а если он будет undefined ?
            return rejectWithValue("Please enter all required data");
        try {
            const response = await axios.get(
                `http://localhost:3001/users?email=${email}`
            );

            const user = response.data.find(
                (fetchedUser) => fetchedUser.email === email
            );

            if (user && user.password === password) {
                return user;
            } else return rejectWithValue("Incorrect login or password");
        } catch (err) {
            return rejectWithValue(`Network error: ${err.message}`);
        }
    }
);

export const register = createAsyncThunk(
    "user/register",
    async function ({ email, password, id }, { rejectWithValue }) {
        if (email === "" || id === "")
            // а если он будет undefined ?
            return rejectWithValue("Please enter all required data");
        if (password.length < 6)
            return rejectWithValue("Password must be longer then 6 symbols");
        try {
            // Finding already used emails and id's

            const resEmails = await axios.get(
                `http://localhost:3001/users?email=${email}`
            );
            if (resEmails.data.find((resEmail) => resEmail.email === email)) {
                return rejectWithValue("this email is already registered");
            }

            const resIds = await axios.get(
                `http://localhost:3001/users?id=${id}`
            );
            if (resIds.data.find((resId) => resId.id === id)) {
                return rejectWithValue("this username is already registered");
            }

            axios.post(`http://localhost:3001/users`, { email, password, id });

            return { email, id };
        } catch (err) {
            return rejectWithValue(`Network error: ${err.message}`);
        }
    }
);
