import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export const denouncementSlice = createSlice({
  name: "denouncement",
  initialState: {
    inCart: false,
    value: 1500,
  },
  reducers: {
    setInCart: (state, action) => {
      state.inCart = action.payload;
    },
  },
});

export const { setInCart } = denouncementSlice.actions;

export const selectIsInCart = ({ denouncement }: RootState) => denouncement.inCart;
export const selectValue = ({ denouncement }: RootState) => denouncement.value;

export default denouncementSlice.reducer;
