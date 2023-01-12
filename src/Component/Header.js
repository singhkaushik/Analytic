import { prependOnceListener } from "process";
import React from "react";
import "./css/Analytic.css";
const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.name}</h1>
    </div>
  );
};
export default Header;
