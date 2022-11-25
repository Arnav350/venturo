import React, { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./pages/Main.jsx";
import About from "./pages/About.jsx";
import Account from "./pages/Account.jsx";
import Donate from "./pages/Donate.jsx";
import Faq from "./pages/Faq.jsx";
import Plan from "./pages/Plan.jsx";
import Review from "./pages/Review.jsx";
import Schedule from "./pages/Schedule.jsx";
//test
import Elementary from "./pages/Elementary";

function App() {
  const [user, setUser] = useState({});
  const [userEmail, setEmail] = useState("");
  const [userPass, setPass] = useState("");

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        userEmail,
        setEmail,
        userPass,
        setPass,
      }}
    >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Plan" element={<Plan />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Elementary" element={<Elementary />} />
        </Routes>
        <Footer />
      </Router>
    </Context.Provider>
  );
}

export default App;

export const Context = createContext({});
