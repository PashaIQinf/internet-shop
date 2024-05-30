import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    orders: null,
};
const OrderSlice= createSlice({
    name: "Orders",
    initialState,
    reducers: {
        setOrder(state, action) {
            state.orders = action.payload.orders;
        },
    },
});
export const { setOrder } = OrderSlice.actions;
export const selectOrder = state => state.Orders.orders;
export default OrderSlice.reducer;