import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import FlexContainer from "./FlexContainer";

const Bar = styled.header`
  width: 100%;
  background-color: navy;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 50px;
`;

const StylishLink = styled(Link)`color: white !important;`;

// const Tab = styled(Link)`color: white;`;

export default function Header({ lol }) {
  return (
    <Bar>
      <StylishLink to="/">Home</StylishLink>
      <StylishLink to="/funding-reqs">Funding Requirements</StylishLink>
      <StylishLink to="/project-details">Project Details</StylishLink>
      <StylishLink to="/initial-options">Initial Funding Options</StylishLink>
      <StylishLink to="/about-you">About You</StylishLink>
      <StylishLink to="/document-submission">Document Submission</StylishLink>
      <StylishLink to="/thank-you">Thank You</StylishLink>
      {/* {lol} */}
    </Bar>
  );
}
