import React from "react";
import { Provider } from "react-redux";
import stores from "./stores";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./routes";
const App = () => {
  return (
    <Provider store={stores}>
      <BrowserRouter>
        <Route component={routes} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
