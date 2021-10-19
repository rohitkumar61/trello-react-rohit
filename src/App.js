import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./layout/Header";
import ListContainer from "./components/List/ListContainer";
import BoardsContainer from "./components/Board/BoardsContainer";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={BoardsContainer} />
          <Route path="/boards/:id" component={ListContainer} />{" "}
          <Route path="/board" component={ListContainer} />
        </Switch>
      </div>{" "}
    </Router>
  );
}

export default App;
