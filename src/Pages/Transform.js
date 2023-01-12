import ActiveCircle from "../Component/ActiveCircle";
import { Link } from "react-router-dom";
import "../Component/css/Analytic.css";
import Header from "../Component/Header";
//import TableDemand from "../Component/TableDemand";
import Companies from "../Component/Company";
const Transform = () => {
  return (
    <div>
      <Header name="Create Model: Transform" />
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
