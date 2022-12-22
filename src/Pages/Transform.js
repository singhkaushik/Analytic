import ActiveCircle from "./ActiveCircle";
import { Link } from "react-router-dom";
import "../Component/css/Analytic.css";
// import TableDemand from "../Component/TableDemand";
// import CsvRead from "../Component/CsvUpload";
// import ExcelData from "../Component/ExcelData";
import Test from "../Component/Test";
const Transform = () => {
  return (
    <div>
      <div className="header">
        <h1>Create Model: Transform</h1>
      </div>
      <ActiveCircle />
      <Test />
      {/* <ExcelData /> 
      <div>
        <TableDemand />
        <CsvRead />
      </div>*/}
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
