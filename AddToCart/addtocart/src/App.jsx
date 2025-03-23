import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Log from "./components/Log";

const App = () => {
  const [boolean, setBoolean] = useState(false);
  const [bool, SetBool] = useState(true);
  const bodyRef = useRef(document.body);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.style.overflowY = bool ? "hidden" : "scroll";
    }
  });

  return (
    <>
      {bool && (
        <>
          <Log SetBool={SetBool} />
          <div className="w-[100%] h-[100%] bg-[#1f1f21cf] z-[20] absolute"></div>
        </>
      )}
      <div>
        <Navbar
          bool={boolean}
          setBool={setBoolean}
          Boolean={bool}
          SetBoolean={SetBool}
        />

        <Routes>
          <Route path="/" element={<Section bool={boolean} />} />
          <Route path="/home" element={<Section bool={boolean} />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
