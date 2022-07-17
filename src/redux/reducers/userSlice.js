import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "../actions/authActions";

const userSlice = createSlice({
    name: "user",
    initialState: { email: null, id: null, err: null },
    reducers: {
        logout(state) {
            localStorage.removeItem("user");
            sessionStorage.removeItem("user");
            state.email = null;
            state.id = null;
            state.err = null;
        },
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.err = null;
        },
        [login.fulfilled]: (state, action) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.err = null;
        },
        [login.rejected]: (state, action) => {
            state.err = action.payload;
        },
        [register.pending]: (state, action) => {
            state.err = null;
        },
        [register.fulfilled]: (state, action) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.err = null;
        },
        [register.rejected]: (state, action) => {
            state.err = action.payload;
        },
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
