import { Link } from "react-router-dom";
import React from "react";
import "../Component/css/Analytic.css";
import Header from "../Component/Header";
import Frame2 from "../Component/assets/images/Frame2.svg";
import Frame9 from "../Component/assets/images/Frame9.svg";
import Group from "../Component/assets/images/Group.png";
const Analytic = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={Frame2} alt="pho" />
        <img src={Group} className="img" alt="pho" />

        <img src={Frame9} alt="pho" />
      </div>
      <p className="p">Route Optimisations</p>
      <Link to="/demandForecasting">
        <p className="p">Demand Forecasting</p>
      </Link>
      <p className="p">Product Recommendations</p>
    </div>
  );
};
export default Analytic;
