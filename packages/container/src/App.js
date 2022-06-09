import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingAppComponent from "./components/MarketingApp";
import Header from "./components/Header";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingAppComponent />
      </div>
    </BrowserRouter>
  );
};
