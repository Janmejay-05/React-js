import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import User from "./components/User";
import Update from "./components/Update";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/user" element={<User />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
};

export default App;
