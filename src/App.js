import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Member1 } from "./views/Member1";
import { Member2 } from "./views/Member2";
import { Member3 } from "./views/Member3";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//team leader
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Page1 />
        </Route>

        <Route path="/page1" exact>
          <Page1 />
          <Member1/>
        </Route>

        <Route path="/page2" exact>
          <Page2/>
          <Member2 />
        </Route>

        <Route path="/page3" exact>
          <Page3/>
          <Member3 />
        </Route>
      </Switch>
    </Router>
  );
}

function Page1() {
  return (
    <div>
      <h1>Page1</h1>
    </div>
  );
}
function Page2() {
  return (
    <div>
      <h1>Page2</h1>
    </div>
  );
}
function Page3() {
  return (
    <div>
      <h1>Page3</h1>
    </div>
  );
}
 
export default App;
