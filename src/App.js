import "./App.scss";
import { Route, Link, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
