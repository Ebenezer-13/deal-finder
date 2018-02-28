import React from "react";
import styled from "styled-components";
import FlexContainer from "../../components/FlexContainer";

const Container = styled(FlexContainer)`
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 50%;
  color: navy;
  font-size: 6vw;
  text-align: center;
  margin-top: 5vh;
  margin-left: 20vw;
  margin-right: 20vw;
`;

const IntroContainer = styled(FlexContainer)`
  margin-top: 10vh;
  margin-left: 20vw;
  margin-right: 20vw;
  height: 35vh;
  background: lightgrey;
  border: 1px solid black;
  padding: 5em;
  text-align: center;
`;

const Button = styled.button`
  background: navy;
  color: white;
  padding: 5px;
  height: 50px;
  width: 100px;
`;

const ButtonContainer = styled(FlexContainer)`
  flex-direction: row;
  justify-content: space-around;
  width: 250px;
  margin-bottom: 20vh;
`;

const handleClick = route => {
  window.location = route;
};

export default function Home() {
  return (
    <Container>
      <TitleContainer>PropFinder.com</TitleContainer>
      <IntroContainer>
        In here will be some text introducing the app, who we are and why we are
        doing what we are doing
      </IntroContainer>
      <ButtonContainer>
        <Button onClick={() => handleClick("/funding-reqs")}>I'm New</Button>
        <Button onClick={() => handleClick("/funding-reqs")}>
          I'm a Returning Customer
        </Button>
      </ButtonContainer>
    </Container>
  );
}

// const mapStateToProps = state => ({
//   count: state.counter.count,
//   isIncrementing: state.counter.isIncrementing,
//   isDecrementing: state.counter.isDecrementing
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       increment,
//       incrementAsync,
//       decrement,
//       decrementAsync,
//       changePage: () => push("/about-us")
//     },
//     dispatch
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
