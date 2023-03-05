import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx"
import About from "../pages/about/About.jsx"
import Housing from "../pages/housing/Housing.jsx"
import Error from "../pages/error/Error.jsx"

function Routing() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/housing" element={<Housing />} />
    <Route path="*" element={<Error />} />
  </Routes>
  )
}

export default Routing