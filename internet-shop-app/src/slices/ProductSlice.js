import {createSlice} from '@reduxjs/toolkit';
import { collection, getDocs } from "firebase/firestore";
import {firestore} from "../firebase"
async function getProducts() { 
    const snapshot = await getDocs(collection(firestore, 'Products'));
    return snapshot.docs.map(doc => doc.data());
}
const Products = await getProducts()

const initialState = {
    products: Products,
};
const ProductSlice= createSlice({
    name: "Products",
    initialState,
    reducers: {

    },
});
export const selectProducts = state => state.Products.products;
export default ProductSlice.reducer;