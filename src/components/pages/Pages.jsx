import React from "react";
import "./Pages.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../common/Header";
import Home from "../home/Home";

const Pages = () => {
  return <>
  <Router>
    <Header />
    <Routes>
      <Route exact path="/"  element={<Home />} />
    </Routes>
  </Router>
  </>;
};

export default Pages;
