import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Us from "./pages/Us";
import Courses from "./pages/Courses";
import Createaccount from "./pages/Createaccount";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/us" element={<Us />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
