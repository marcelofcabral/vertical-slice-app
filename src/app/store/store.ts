import { configureStore } from "@reduxjs/toolkit";
import denouncementReducer from "../../features/denouncement/redux";
import contactUsReducer from "../../features/contactUs/redux";
import orderReducer from "../../features/order/redux";

export default configureStore({
  reducer: {
    denouncement: denouncementReducer,
    contactUs: contactUsReducer,
    order: orderReducer,
  },
});
