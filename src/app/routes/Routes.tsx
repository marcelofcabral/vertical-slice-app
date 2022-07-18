import React from "react";

import { BrowserRouter, Routes as RRDRoutes, Route } from "react-router-dom";

import NavBar from "../../components/NavBar";
import HomePage from "../../pages/HomePage/HomePage";
import DenouncementPage from "../../pages/DenouncementPage";
import ContactUsPage from "../../pages/ContactUsPage/ContactUsPage";
import OrderInfoPage from "../../pages/OrderInfoPage";
import OrderConclusionPage from "../../pages/OrderConclusionPage";

const Routes: React.FC = () => (
  <BrowserRouter>
    <NavBar />
    <RRDRoutes>
      <Route index element={<HomePage />} />
      <Route path="/denouncement" element={<DenouncementPage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="/order">
        <Route index element={<OrderInfoPage />} />
        <Route path="/order/conclusion" element={<OrderConclusionPage />} />
      </Route>
    </RRDRoutes>
  </BrowserRouter>
);

export default Routes;
