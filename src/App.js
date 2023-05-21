import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import DrawerAppBar from "./components/NavBar/DrawerAppBar";
import SocialLinks from "./components/Footer/SocialLinks";
// import React, {useState} from "react";




function App() {
 
  return (
    <div className="App" >
      <BrowserRouter basename={window.location.pathname || ""}>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
        <SocialLinks />
      </BrowserRouter>
    </div>
  );
}

export default App;
