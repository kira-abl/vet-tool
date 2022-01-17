import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import MainMenu from "./Menu";
import Dashboard from "./Dashboard";


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/menu" component={MainMenu} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};
export default App;
