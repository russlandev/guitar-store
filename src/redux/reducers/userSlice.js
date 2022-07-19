import { createSlice } from "@reduxjs/toolkit";
import { registerNewUser, login } from "../actions/authActions";

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
        [registerNewUser.pending]: (state, action) => {
            state.err = null;
        },
        [registerNewUser.fulfilled]: (state, action) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.err = null;
        },
        [registerNewUser.rejected]: (state, action) => {
            state.err = action.payload;
        },
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
