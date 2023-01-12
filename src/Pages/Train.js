import ActiveCircle from "../Component/ActiveCircle";
import { Link } from "react-router-dom";
import "../Component/css/Analytic.css";
import LineChart from "../Chart/LineChart";
//import Companies from "../Component/Company";
const Train = () => {
  return (
    <div>
      <div className="header">
        <h1>Create Model: Analyze</h1>
      </div>
      <ActiveCircle />
      <div>
        {/* <Companies /> */}
        <LineChart />
      </div>
      <div className="marg">
        <button className="cancel_btn">Cancel</button>
        <Link to="">
          <button className="btn">Next</button>
        </Link>
      </div>
    </div>
  );
};
export default Train;
