// App.js
import React, { useState } from "react";
import Signup from "./Components/Signup";
import RegisterForm from "./Components/RegisterForm";
import EmailContext from "./context/EmailContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import PopularPacks from "./Components/PopularPacks";
import TourDetailsRegistration from "./Registrations/TourDetailsRegistration";
import DevotionalTripRegistration from "./Registrations/DevotionalTripRegistration";
import DevotionalPlans from "./Components/DevotionalPlans";
import CruiseShipPage from "./Components/CruiseShipPage";
import PanIndiaTour from "./Components/PanIndiaTour";
import SupportPage from "./Components/SupportPage";
import EducationalTrips from "./Components/EducationalTrips";
import AdminDashBoard from "./DashBoard/AdminDashBoard";

function App() {
  const [email, setEmail] = useState("");

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      <Router>
        <Routes>
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/popularPacks" element={<PopularPacks/>} />
          <Route path="/tourDetailsRegistration" element={<TourDetailsRegistration/>}/>
          <Route path="/devotionalTripRegistration" element={<DevotionalTripRegistration/>}/>
          <Route path="/devotionalPlans" element={<DevotionalPlans/>}/>
          <Route path="/cruiseShipPacks" element={<CruiseShipPage/>}/>
          
          <Route path="/PanIndiaTour" element={<PanIndiaTour/>}/>
          <Route path="/SupportPage" element={<SupportPage/>}/>
          <Route path="/EducationalTrips" element={<EducationalTrips/>}/>
          <Route path="/AdminDashBoard" element={<AdminDashBoard/>}/>
        </Routes>
      </Router>
    </EmailContext.Provider>
  );
}

export default App;
