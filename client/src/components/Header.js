import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import FlexContainer from "./FlexContainer";

const Bar = styled.header`
  padding-left: 10px;
  background-color: navy;
  color: white;
  display: flex;
  align-items: center;
  min-height: 50px;
`;

// const Tab = styled(Link)`color: white;`;

export default class Header extends React.Component {
  render() {
    return (
      <Bar>
        <Link to="/">Home</Link>
        <Link to="/funding-reqs">Funding Requirements</Link>
        <Link to="/project-details">Project Details</Link>
        <Link to="/initial-options">Initial Funding Options</Link>
        <Link to="/about-you">About You</Link>
        <Link to="/document-submission">Document Submission</Link>
        <Link to="/thank-you">Thank You</Link>
        <p>{this.props.lol}</p>
      </Bar>
    );
  }
}
