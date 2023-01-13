import React, { useState } from "react";
import styled from "styled-components";
const MainContainer = styled.div`
  width: 60%;
  max-width: 100%;
  padding: 0 45px;
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
// for box internal text
const StepCount = styled.span`
  font-size: 19px;
  color: #f3e7f3;
  @media (max-width: 600px) {
    font-size: 16px;
  }
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
  margin-top: 100px;
`;
const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: #4a154b;
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
const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #4a154b;
  -ms-transform: scaleX(-1) rotate(-46deg);
  -webkit-transform: scaleX(-1) rotate(-46deg);
  transform: scaleX(-1) rotate(-46deg);
`;
const steps = [
  { label: "Get Data", step: 1 },
  { label: "Transform", step: 2 },
  { label: "Analyze", step: 3 },
  { label: "Train", step: 4 },
  { label: "Deploy", step: 5 },
];
const ActiveCircle = () => {
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
    <MainContainer>
      {" "}
      <StepContainer width={width}>
        {" "}
        {steps.map(({ step, label }) => (
          <StepWrapper key={step}>
            {" "}
            <StepStyle step={activeStep >= step ? "completed" : "incomplete"}>
              {" "}
              {activeStep > step ? (
                <CheckMark></CheckMark>
              ) : (
                <StepCount></StepCount>
              )}{" "}
            </StepStyle>{" "}
            <StepsLabelContainer>
              {" "}
              <StepLabel key={step}>{label}</StepLabel>{" "}
            </StepsLabelContainer>{" "}
          </StepWrapper>
        ))}{" "}
      </StepContainer>{" "}
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
    </MainContainer>
  );
};
export default ActiveCircle;
