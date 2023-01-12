import React from "react";
import { Link } from "react-router-dom";
import ActiveCircle from "../Component/ActiveCircle";
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
      <div className="marg">
        <button className="cancel_btn">Cancel</button>
        <Link to="/train">
          <button className="btn">Next</button>
        </Link>
      </div>
    </div>
  );
};
export default Analyze;
