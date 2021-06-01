import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { Member1 } from "./views/Member1";
import { Member2 } from "./views/Member2";
import { Member3 } from "./views/Member3";

function App() {
  return (
    <div className="container-fulid">
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-12 col-md-6 bg-dark text-light d-flex align-items-center justify-content-center mb-3">
          <Member1 />
        </div>
        <div className="col-12 col-md-6 bg-info text-light d-flex align-items-center justify-content-center">
          <Member2 />
        </div>
      </div>
    </div>
  );
}
export default App;
