import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth, db } from "./components/init.js";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./pages/Main.jsx";
import About from "./pages/About.jsx";
import Donate from "./pages/Donate.jsx";
import Faq from "./pages/Faq.jsx";
import Plan from "./pages/Plan.jsx";
import Review from "./pages/Review.jsx";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Plan" element={<Plan />} />
          <Route path="/Review" element={<Review />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
