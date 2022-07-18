import React from "react";

import Routes from "./routes";
import AppProvider from "./AppProvider";

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
