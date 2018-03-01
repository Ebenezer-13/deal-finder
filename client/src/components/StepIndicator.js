import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

import FlexContainer from "./FlexContainer";

const Container = styled(FlexContainer)`
  align-items: center;
  margin-left: -${props => props.theme.bodyPadding};
  width: 100vw;
`;

const StepDelimiter = styled.div`
  height: 3px;
  flex-grow: 1;
  max-width: ${props => (props.last ? "initial" : "35px")};
  background-color: ${props =>
    props.later ? props.theme.iconBackground : props.theme.primary};
`;

const Step = styled(FlexContainer)`
  width: ${props => (props.current ? "40px" : "15px")};
  height: ${props => (props.current ? "40px" : "15px")};
  ${props => (props.current ? "" : "font-size: 0;")};
  margin-left: -1px;
  border-radius: 50%;
  color: ${props => props.theme.textOnPrimary};
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.later ? props.theme.gray3 : props.theme.primary};
`;

const isCurrentStep = (steps, currentStep, index) =>
  steps.indexOf(currentStep) === index;

const isLaterStep = (steps, currentStep, index) =>
  steps.indexOf(currentStep) < index;

const isLaterStepDelimiter = (steps, currentStep, index) =>
  steps.indexOf(currentStep) <= index;

const isLastStepDelimiter = (steps, currentStep) =>
  steps.indexOf(currentStep) === steps.length - 1;

export default function StepIndicator({
  currentStep,
  steps,
  specialLabel,
  children
}) {
  return (
    <Container>
      <StepDelimiter later={false} />
      {steps.map((step, index) => [
        <Step
          current={isCurrentStep(steps, currentStep, index)}
          later={isLaterStep(steps, currentStep, index)}
          key={step}
        >
          {specialLabel ? specialLabel : index + 1}
        </Step>,
        <StepDelimiter
          later={
            isLaterStepDelimiter(steps, currentStep, index) &&
            !isLastStepDelimiter(steps, currentStep)
          }
          last={isLastStepDelimiter(steps, step)}
        />
      ])}
      {children}
    </Container>
  );
}
