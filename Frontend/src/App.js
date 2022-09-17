import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Modal from "react-modal";
import axios from "axios"

import "./App.css";
import Homepage from "./Pages/Homepage";
// import Bespoke from "./Pages/Bespoke";
import AboutUs from "./Pages/AboutUs";
import LookBook from "./Pages/LookBook";
import Shop from "./Pages/Shop";
import News from "./Pages/News";
// import Login from "./Pages/Login";
// import { AuthContext } from "./Shared/Context/auth-context";
import Navigation from "./Shared/Components/Navigation/Navigation";
import Footer from "./Shared/Components/Navigation/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ROACircleReward from "./Pages/ROACircleReward";
// Modal.setAppElement(document.getElementById("log_in_modal"));

// export function openModal() {
//   openLogInModal()
// }

const App = () => {
  return (
    <Router>
      <Navigation className="App-header" />
      <main className="main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" caseSensitive={false} element={<Shop />} />
          <Route path="/aboutUs" caseSensitive={false} element={<AboutUs />} />
          <Route path="/news" caseSensitive={false} element={<News />} />
          <Route
            path="/lookBook"
            caseSensitive={false}
            element={<LookBook />}
          />
        </Routes>
      </main>
      <Footer className="footer" />
    </Router>
  );
};

export default App;
