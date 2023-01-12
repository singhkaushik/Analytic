import React from "react";
import Header from "../Component/Header";
import ActiveCircle from "../Component/ActiveCircle";
import UploadView from "../Component/UploadView";
import "../Component/css/Analytic.css";
const AddModel = () => {
  return (
    <div>
      <Header name="Create Model: Get Data" />
      <div>
        <ActiveCircle />
      </div>
      <UploadView />
    </div>
  );
};
export default AddModel;
