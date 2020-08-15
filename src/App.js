import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//SemanticUi
import { Container } from "semantic-ui-react";

//Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

//Components
import MenuBar from "./components/MenuBar";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Container>
        <MenuBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Container>
    </Router>
  );
}

export default App;
