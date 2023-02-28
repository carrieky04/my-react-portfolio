import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import SimpleBottomNavigation from "./components/BottomNav";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;

