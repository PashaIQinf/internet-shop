import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import userpassReducer from './slices/userPass'
import ProductsReducer from './slices/ProductSlice'

export const store = configureStore({
       reducer:{
        user: userReducer,
        userpass: userpassReducer,
        Products: ProductsReducer
       }
});