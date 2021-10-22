import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from "react-redux"

import store from './store/store';


import "./App.css";
import Header from "./layout/Header";
import ListContainer from "./components/List/ListContainer";
import BoardsContainer from "./components/Board/BoardsContainer";



function App() {
  return (
    <Provider store = {store}>
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
    </Provider>
  );
}

export default App;
