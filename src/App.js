import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "./App.css";
import Header from "./layout/Header";
import ListContainer from "./components/ListContainer";
import BoardsContainer from "./components/BoardsContainer";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={BoardsContainer} />
          <Route path="/:id" component={ListContainer} />{" "}
          <Route path="/boards" component={ListContainer} />
        </Switch>
      </div>{" "}
    </Router>
  );
}

export default App;
