import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home.jsx"
import About from "../pages/about/about.jsx"
import Housing from "../pages/housing/housing.jsx"
import Error404 from "../pages/error-404/error-404.jsx"

function routing() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/housing" element={<Housing />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
  )
}

export default routing