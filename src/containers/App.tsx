import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login } from "./";
import "./App.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
