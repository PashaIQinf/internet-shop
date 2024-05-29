import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    basket: null,
};

const BasketSlice= createSlice({
    name: "Basket",
    initialState,
    reducers: {
        
        setBasket(state, action) {
            state.basket = action.payload.basket;
        },
    },
});

export const { setBasket } = BasketSlice.actions;
export const selectBasket = state => state.Basket.basket;
export default BasketSlice.reducer;