import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    password: null,
};
const userPass = createSlice({
    name: "userpass",
    initialState,
    reducers: {
        setUserPass(state, action) {
            state.password = action.payload.password;
        },
        removeUserPass(state) {
            state.password = null;
        },
    },
});

export const {setUserPass, removeUserPass} = userPass.actions;
export const selectPassword = state => state.userpass.password;
export default userPass.reducer;