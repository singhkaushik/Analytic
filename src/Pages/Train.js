import ActiveCircle from "../Component/ActiveCircle";
import { Link } from "react-router-dom";
import "../Component/css/Analytic.css";
//import TableDemand from "../Component/TableDemand";
import Companies from "../Component/Company";
const Train = () => {
  return (
    <div>
      <div className="header">
        <h1>Create Model: Analyze</h1>
      </div>
      <ActiveCircle />
      <div>
        {/* <TableDemand /> */}
        <Companies />
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
export default Train;
