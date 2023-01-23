import React from "react";
import "./index.css";
import Homepage from "./routes/Homepage";
import About from "./routes/About";
import Services from "./routes/Services";
import Support from "./routes/Support";
import Blog from "./routes/Blog";
import Portfolio from "./routes/Portfolio";
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/about" element={<About />}/> 
        <Route path="/services" element={<Services />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/blog" element={<Blog />}/>
      </Routes>
    </>
  );
}

export default App;
