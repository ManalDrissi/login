import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/Profile";
import Path404 from "./components/Path404";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/users" component={User} />
          <Route path="/" component={Path404} />
        </Switch>
      </div>
    </Router>
  );
}
