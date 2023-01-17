import ActiveCircle from "../Component/ActiveCircle";
// import { Link } from "react-router-dom";
import Header from "../Component/Header";
import "../Component/css/Analytic.css";
import LineChart from "../Chart/LineChart";
//import Companies from "../Component/Company";
const Train = () => {
  return (
    <div>
      <Header name="Create Model: Analyze" />
      <ActiveCircle />
      <div>
        {/* <Companies /> */}
        <div className="trainchart">
          <LineChart />
        </div>
      </div>
      <div className="marg">
        <button className="cancel_btn">Cancel</button>
        <button className="btn">Next</button>
      </div>
    </div>
  );
};
export default Train;
