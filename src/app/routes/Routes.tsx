import { BrowserRouter, Routes as RRDRoutes, Route } from "react-router-dom";

import HomePage from "../../pages/HomePage";

const Routes: React.FC = () => (
  <BrowserRouter>
    <RRDRoutes>
      <Route path="/" element={<HomePage />} />
    </RRDRoutes>
  </BrowserRouter>
);

export default Routes;