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
import Elementary from "./pages/Elementary.jsx";
import Missing from "./pages/Missing.jsx";
import CheckSign from "./components/CheckSign.js";

function App() {
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      <Router>
        <Nav />
        <Routes>
          {/* Public */}
          <Route path="/Home" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Plan" element={<Plan />} />
          <Route path="/Review" element={<Review />} />
          <Route path="*" element={<Missing />} />

          {/* Private */}
          <Route element={<CheckSign />}>
            <Route path="/Account" element={<Account />} />
            <Route path="/Elementary" element={<Elementary />} />
            <Route path="/Schedule" element={<Schedule />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </Context.Provider>
  );
}

export default App;

export const Context = createContext({});
