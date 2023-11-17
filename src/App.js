import Home from "./components/Home";
import About from "./components/About"
import Plants from "./components/Plants";
import Community from "./components/Community";
import Care from "./components/Care";
import PlantsDescription from "./components/PlantsDescription";

import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="app_div">
      
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/plants" Component={Plants} />
            <Route path="/plants/:id" Component={PlantsDescription} />
            <Route path="/about" Component={About} />
            <Route path="/care" Component={Care} />
            <Route path="/community" Component={Community} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
