import * as React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import FlexContainer from "./FlexContainer";

const Bar = styled.header`
  padding-left: 10px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textOnPrimary};
  display: flex;
  align-items: center;
  min-height: 50px;
`;

const titleComponent = (title, backButtonUrl) => ({ history }) => {
  return (
    <Container>
      {(backButtonUrl && (
        <BackImage
          src="/arrow-back.svg"
          onClick={() => history.push(backButtonUrl)}
        />
      )) || <MenuImage src="menu.svg" />}
      {title}
    </Container>
  );
};
