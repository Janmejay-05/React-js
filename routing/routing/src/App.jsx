import React from "react";
import { Route, Routes } from "react-router";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Link to={"/about"}>about</Link>
      <Link to={"/contact"}>contact</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
