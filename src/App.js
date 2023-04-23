// import "./App.css";
// import { Outlet } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
// import SimpleBottomNavigation from "./components/Footer/BottomNav";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Outlet />

//       <SimpleBottomNavigation />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import DrawerAppBar from "./components/NavBar/DrawerAppBar";
import SimpleBottomNavigation from "./components/Footer/SimpleBottomNavigation";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={window.location.pathname || ""}>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter basename={window.location.pathname || ""}>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="about-me" element={<AboutMe />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="portfolio" element={<Portfolio />} />
//         <Route path="resume" element={<Resume />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );
