import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./slices/ProductSlice";

const rootReducer = combineReducers({
  product: productSlice,
});

export default rootReducer;
