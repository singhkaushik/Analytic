import "../Component/css/Analytic.css";
import { Link } from "react-router-dom";

import TableDemand from "../Component/TableDemand";
const DemandForcasting = () => {
  return (
    <div>
      <div className="header gap_between">
        <h1>Demand Forecasting</h1>
        <Link to="/addModel">
          <button className="btn">+ Add Model</button>
        </Link>
      </div>
      <TableDemand />
    </div>
  );
};
export default DemandForcasting;
