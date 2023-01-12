import React from "react";
import "../Component/css/ActiveCircle.css";
const ActiveCircle = () => {
  //   // const progressBar =()=>{};
  //   let active = 1,
  //     steps;
  //   const progressNext = () => {
  //     console.log("clicked");
  //     // active++;
  //     // if (active > steps.length) {
  //     //   active = steps.length;
  //     // }
  //     // updateProgress();
  //   };
  //   const progressPrev = () => {
  //     console.log("clickedprev");
  //     // active--;
  //     // if (active < 1) {
  //     //   active = 1;
  //     // }
  //     // updateProgress();
  //   };
  //   //   const updateProgress = () => {
  //   //     steps.forEach((step, i) => {
  //   //       if (i < active) {
  //   //         step.classList.add("active");
  //   //       } else {
  //   //         step.classList.remove("active");
  //   //       }
  //   //     });
  //   //   };
  //   //     progressBar.style.width = ((active - 1) / (steps.length - 1)) * 100 + "%";
  //   //     if (active === 1) {
  //   //       progressPrev.disabled = true;
  //   //     } else if (active === steps.length) {
  //   //       progressNext.disabled = true;
  //   //     } else {
  //   //       progressPrev.disabled = false;
  //   //       progressNext.disabled = false;
  //   //     }
  //   //   };
  return (
    <div>
      <div id="progress">
        <ul id="progress_num">
          <li className="step active"></li>
          <li className="step"></li>
          <li className="step"></li>
          <li className="step"></li>
          <li className="step"></li>
        </ul>
        <ul id="progress_num">
          <li>Get Data</li>
          <li> Transform</li>
          <li>Analyze</li>
          <li>Train</li>
          <li>Deploy</li>
        </ul>
      </div>
      {/* <button onClick={progressPrev} className="btn">
        Prev
      </button>
      <button onClick={progressNext} className="btn">
        Next
      </button> */}
    </div>
  );
};
export default ActiveCircle;
