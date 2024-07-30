import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favoriteReducer from "./favSlice"

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        favourites : favoriteReducer,
    }
});

export default appStore;