import ActiveCircle from "./ActiveCircle";
import { Link } from "react-router-dom";
import "../Component/css/Analytic.css";
//import TableDemand from "../Component/TableDemand";
import Companies from "../Component/Company";
const Transform = () => {
  return (
    <div>
      <div className="header">
        <h1>Create Model: Transform</h1>
      </div>
      <ActiveCircle />
      <div>
        {/* <TableDemand /> */}
        <Companies />
      </div>
      <div className="marg">
        <button className="cancel_btn">Cancel</button>
        <Link to="/analyze">
          <button className="btn">Next</button>
        </Link>
      </div>
    </div>
  );
};
export default Transform;
