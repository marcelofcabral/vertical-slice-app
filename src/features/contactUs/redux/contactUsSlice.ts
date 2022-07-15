import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export const contactUsSlice = createSlice({
  name: "contactUs",
  initialState: {
    quantity: 0,
    emailAddress: "",
    value: 450,
  },
  reducers: {
    incrementQuantity: (state) => {
      state.quantity += 1;
    },
    decrementQuantity: (state) => {
      if (state.quantity > 0) state.quantity -= 1;
    },
    addToQuantity: (state, action) => {
      state.quantity += action.payload;
    },
    setEmailAddress: (state, action) => {
      state.emailAddress = action.payload;
    },
  },
});

export const { incrementQuantity, decrementQuantity, addToQuantity, setEmailAddress } = contactUsSlice.actions;

export const selectEmail = ({ contactUs }: RootState) => contactUs.emailAddress;
export const selectQuantity = ({ contactUs }: RootState) => contactUs.quantity;
export const selectValue = ({ contactUs }: RootState) => contactUs.value;

export default contactUsSlice.reducer;
