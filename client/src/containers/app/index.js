import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../about";

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
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <p>{this.state.response}</p>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
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
