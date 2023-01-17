// import React from "react";
// import Header from "../Component/Header";
// import ActiveCircle from "../Component/ActiveCircle";
// import UploadView from "../Component/UploadView";
// import "../Component/css/Analytic.css";
// const AddModel = () => {
//   return (
//     <div>
//       <Header name="Create Model: Get Data" />
//       <div>
//         <ActiveCircle />
//       </div>
//       <UploadView />
//     </div>
//   );
// };
// export default AddModel;
import React from "react";
import Header from "../Component/Header";
import UploadView from "../Component/UploadView";
import "../Component/css/Analytic.css";
import { useState, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
const AddModel = () => {
  const MainContainer = styled.div`
    width: 60%;
    max-width: 100%;
    padding: 0px 0px 20px 45px;
  `;
  const StepContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    position: relative;
    :before {
      content: "";
      position: absolute;
      background: #e5eaee;
      height: 6px;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
    :after {
      content: "";
      position: absolute;
      background: #ff5050;
      height: 6px;
      width: ${({ width }) => width};
      top: 50%;
      transition: 0.4s ease;
      transform: translateY(-50%);
      left: 0;
    }
  `;
  const StepWrapper = styled.div`
    position: relative;
    z-index: 1;
  `;
  const StepStyle = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: rgb(223, 223, 223);
    border: 6.5px solid
      ${({ step }) => (step === "completed" ? "#FF5050" : "#E5EAEE")};
    transition: 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const StepsLabelContainer = styled.div`
    position: absolute;
    top: 66px;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  const StepLabel = styled.span`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  `;
  const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 0px 20px;
    width: 20%;
  `;
  const ButtonStyle = styled.button`
    border-radius: 4px;
    border: 0;
    background: #5d78ff;
    color: #ffffff;
    cursor: pointer;
    padding: 8px;
    width: 90px;
    :active {
      transform: scale(0.98);
    }
    :disabled {
      background: #f3e7f3;
      color: #000000;
      cursor: not-allowed;
    }
  `;

  const steps = [
    { label: "Get_Data", step: 1 },
    { label: "Transform", step: 2 },
    { label: "Analyze", step: 3 },
    { label: "Train", step: 4 },
    { label: "Deploy", step: 5 },
  ];
  const [activeStep, setActiveStep] = useState(1);
  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };
  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const totalSteps = steps.length;
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;
  return (
    <div>
      <Header name="Create Model: Get Data" />
      <MainContainer>
        {" "}
        <StepContainer width={width}>
          {" "}
          {steps.map(({ step, label }) => (
            <StepWrapper key={step}>
              {" "}
              <StepStyle step={activeStep >= step ? "completed" : "incomplete"}>
                {" "}
              </StepStyle>{" "}
              <StepsLabelContainer>
                {" "}
                <StepLabel key={step}>{label}</StepLabel>{" "}
              </StepsLabelContainer>{" "}
            </StepWrapper>
          ))}{" "}
        </StepContainer>{" "}
      </MainContainer>
      <UploadView />
      <ButtonsContainer>
        {" "}
        <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
          {" "}
          Previous{" "}
        </ButtonStyle>{" "}
        <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>
          {" "}
          Next{" "}
        </ButtonStyle>{" "}
      </ButtonsContainer>{" "}
    </div>
  );
};
export default AddModel;
