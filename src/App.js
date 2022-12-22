import Analytic from "./Pages/Analytic";
import DemandForecasting from "./Pages/DemandForecasting";
import { Route, Redirect } from "react-router-dom";
import AddModel from "./Pages/AddModel";
import Transform from "./Pages/Transform";
import Analyze from "./Pages/Analyze";
import React from "react";
const App = () => {
  return (
    <div>
      <Route path="/" exect>
        <Redirect to="/Analytic" />
      </Route>
      <Route path="/Analytic">
        <Analytic />
      </Route>
      <Route path="/demandForecasting">
        <DemandForecasting />
      </Route>
      <Route path="/addModel">
        <AddModel />
      </Route>
      <Route path="/transform">
        <Transform />
      </Route>
      <Route path="/analyze">
        <Analyze />
      </Route>
    </div>
  );
};
export default App;
