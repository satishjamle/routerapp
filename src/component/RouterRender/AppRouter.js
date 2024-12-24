import { Home } from "../ReactRouter/Home";  // Correct relative path
import { About } from "../ReactRouter/About";  // Correct relative path
import { Contact } from "../ReactRouter/Contact";  // Correct relative path
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../ReactRouter/Navbar";  // Correct relative path

export const AppRouter = () => {
  return (
    <>
     <Navbar/>


<BrowserRouter>
  <Routes>
    <Route exact path="/" Component={()=> <Home name ="Home"/> }></Route>

    <Route exact path="/About"Component={()=> <About name ="About"/> }></Route>
    <Route exact path="/contact"  Component={()=> <Contact name ="Contact"/> }></Route>

    
  </Routes>
</BrowserRouter>
    </>
  );
};
