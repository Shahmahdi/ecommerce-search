import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  searchText: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList(state, { payload }) {
      state.list = payload.list;
    },
    setSearchText(state, { payload }) {
      state.searchText = payload.searchText;
    },
  },
});

export const { setProductList, setSearchText } = productSlice.actions;

export default productSlice.reducer;
