import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login, DashBoard} from "../Containers/index";

const AppRoute = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/DashBoard" component={DashBoard} />
    </div>
  </Router>
);

export default AppRoute;
