import React from "react";
import ActiveCircle from "../Component/ActiveCircle";
import UploadView from "../Component/UploadView";
import "../Component/css/Analytic.css";
const AddModel = () => {
  return (
    <div>
      <div className="header">
        <h1>Create Model: Get Data</h1>
      </div>
      <div>
        <ActiveCircle />
      </div>
      <UploadView />
    </div>
  );
};
export default AddModel;
