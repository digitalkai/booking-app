import { configureStore } from "@reduxjs/toolkit";
import housesReducer from "./housesSlicer";

export const store = configureStore({
    reducer: {
        houses: housesReducer
    }
})