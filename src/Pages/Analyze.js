import React from "react";
import ActiveCircle from "./ActiveCircle";
import LineChart from "../Chart/LineChart";
import BarChart from "../Chart/BarChart";
import "../Component/css/Analytic.css";
const Analyze = () => {
  return (
    <div>
      <div className="header">
        <h1>Create Model: Analyze</h1>
      </div>
      <ActiveCircle />
      <div className="analyze_back">
        <div className="chart1">
          <LineChart />
        </div>
        <div className="chart2">
          <BarChart />
        </div>
      </div>
    </div>
  );
};
export default Analyze;
