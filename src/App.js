import React from "react";

// COMPONENTS //
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
// ROUTER //
import { Routes, Route, useLocation } from "react-router-dom";
// TRANSITION //
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} path='/portfolio'/>
          <Route element={<Projects />} path='/work' />
          <Route element={<About />} path='/me'/>
        </Routes>     
      </AnimatePresence>
           
    </div>
  );
}

export default App;
