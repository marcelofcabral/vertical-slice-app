import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    totalValue: 0,
  },
  reducers: {
    setTotalValue: (state, action) => {
      state.totalValue = action.payload;
    },
  },
});

export const { setTotalValue } = orderSlice.actions;

export const selectTotalValue = ({ order }: RootState) => order.totalValue;

export default orderSlice.reducer;
