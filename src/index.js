// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import AboutMe from './pages/AboutMe/AboutMe';
// import Contact from './pages/Contact/Contact';
// import Portfolio from './pages/Portfolio/Portfolio';
// import Resume from './pages/Resume/Resume';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter basename={window.location.pathname || ''}>
//   <Routes>
//     <Route path="/" element={<App />}>
//       <Route path="about-me" element={<AboutMe />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="portfolio" element={<Portfolio />} />
//       <Route path="resume" element={<Resume />} />
//     </Route>
//   </Routes>
// </BrowserRouter>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
