import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";

import Home from "./Pages/Home";
import Alone from "./Pages/Alone";
import About from "./Pages/About";
import Baiography from "./Pages/Baiography";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/Alone" element={<Alone />} />

        <Route path="/contact" element={<About />} />
        <Route path="/Baiography" element={<Baiography/>} />
      
      </Routes>
    </>
  );
}

export default App;