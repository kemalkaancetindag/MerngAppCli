import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Context
import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

//SemanticUi
import { Container } from "semantic-ui-react";

//Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SinglePost from "./pages/SinglePost"

//Components
import MenuBar from "./components/MenuBar";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path = "/posts/:postId" component = {SinglePost}/>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;


