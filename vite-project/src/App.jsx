import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Component/Navbar";

import Home from "./Pages/Home";
import Alone from "./Pages/Alone";
import About from "./Pages/About";
import Baiography from "./Pages/Baiography";
import Think from "./Pages/Think";
import LongBook from "./Pages/LongBook";
// import BookDetails from "./Pages/BookDetails";
import Books from "./Pages/Books";
import Brain from "./Pages/Brain";
import Manipulation from "./Pages/Manipulation";
import Categories from "./Pages/Categories";
// import Contact from "./Pages/Contact";

// import Manipulation from "./Pages/EnglishMindBook";
import EnglishMindBook from "./Pages/EnglishMindBook";
import MindControl from "./Pages/MindControl";
import Motivation from "./Pages/Motivation";
import Psychology from "./Pages/Psychology";
import HindiMotivational from "./Pages/HindiMotivational";
// import Reader from "./Pages/Reader";
import HomePages from "./Pages/HomePages";
import AboutMind from "./Pages/AboutMind";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<HomePages/>} />

        <Route path="/Alone" element={<Alone />} />

        <Route path="/contact" element={<About />} />
       <Route path="/Baiography" element={<Baiography/>} />
        <Route path="/Think" element={<Think/>} />
        {/* <Route path="/BookDetails" element={<BookDetails/>}/> */}
        <Route path="/Books" element={<Books/>}/>
       <Route path="/Brain" element={<Brain/>}/>
       <Route path="/Categories" element={<Categories/>}/>
       {/* <Route path="/Contact" element={<Contact/>}/> */}
       <Route path="/EnglishMindBook" element={<EnglishMindBook/>}/>
       <Route path="HindiMotivational" element={<HindiMotivational/>}/>
       <Route path="LongBook" element={<LongBook/>} />
      <Route path="/Manipulation" element={<Manipulation/>}/>
<Route path="/MindControl" element={<MindControl/>}/>
<Route path="/Motivation" element={<Motivation/>}/>
<Route path="/Psychology" element={<Psychology/>}/>
<Route path="/AboutMind" element={<AboutMind/>}/>

{/* <Route path="/Reader" element ={<Reader/>}/> */}


</Routes>
    </>
  );
}

export default App;