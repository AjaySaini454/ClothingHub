import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../cartSlice";

const Store=configureStore({
    reducer:{
        allCart:cartSlice 
    }
})
export default Store