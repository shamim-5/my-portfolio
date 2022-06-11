import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Projects from "./Pages/Shared/Projects/Projects";
import Email from "./Pages/Email/Email"


function App() {
  return (
    <div className="bg-image text-white h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="email" element={<Email />} />
      </Routes>
    </div>
  );
}

export default App;
