import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="row" style={{ height: "100vh" }}>
      <div className="d-none d-md-block    col-md-3  bg-primary"></div>
      <div className="col-12 col-md-6 bg-dark"></div>
      <div className="d-none d-md-block   col-md-3 bg-info"></div>
    </div>
  );
}
export default App;
