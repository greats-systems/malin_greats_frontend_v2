import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Blockchain from "./components/pages/Blockchain";
import CustomDev from "./components/pages/CustomDev";
import Erp from "./components/pages/Erp";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Error404 from "./components/pages/Error404";

const routes = () => {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/customDev" element={<CustomDev />} />
        <Route path="/erp" element={<Erp />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default routes;
