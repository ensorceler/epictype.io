import React from "react";
import "./App.css";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/tst">
          <Test />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
