import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header";
import Home from "../home";
import FundingReqs from "../FundingReqs";
import ProjectDetails from "../ProjectDetails";
import InitialOptions from "../InitialOptions";
import AboutYou from "../AboutYou";
import DocumentSubmission from "../DocumentSubmission";
import ThankYou from "../ThankYou";

import styled from "styled-components";
import FlexContainer from "../../components/FlexContainer";

const Container = styled(FlexContainer)`
  flex-direction: column;
  flex-grow: 1;
`;

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Container>
        <Header lol="hello">
          <p>{this.state.response}</p>
        </Header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/funding-reqs" component={FundingReqs} />
          <Route exact path="/project-details" component={ProjectDetails} />
          <Route exact path="/initial-options" component={InitialOptions} />
          <Route exact path="/about-you" component={AboutYou} />
          <Route
            exact
            path="/document-submission"
            component={DocumentSubmission}
          />
          <Route exact path="/thank-you" component={ThankYou} />
        </main>
      </Container>
    );
  }
}

// const App = () => (
// <div>
//   <header>
//     <Link to="/">Home</Link>
//     <Link to="/about-us">About</Link>
//   </header>

//   <main>
//     <Route exact path="/" component={Home} />
//     <Route exact path="/about-us" component={About} />
//   </main>
// </div>
// );

export default App;
