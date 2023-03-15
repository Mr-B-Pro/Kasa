import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home.jsx"
import About from "../pages/about/about.jsx"
import Housing from "../pages/housing/housing.jsx"
import Error from "../pages/error/error.jsx"

function routing() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/housing" element={<Housing />} />
    <Route path="*" element={<Error />} />
  </Routes>
  )
}

export default routing