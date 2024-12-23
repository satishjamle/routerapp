import logo from "./logo.svg";
import "./App.css";
import { Home } from "./component/ReactRouter/Home";
import { About } from "./component/ReactRouter/About";
import { Contact } from "./component/ReactRouter/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/ReactRouter/Navbar";

function App() {
const Name = ()=>{
  return(
    <h1>Hello, I am a Name page</h1>
  )
}

  return (
    <>
          <Navbar/>


      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/About" Component={About}></Route>
          <Route exact path="/contact"  Component={Contact}></Route>
          <Route  path="/Contact/Name" Component={Name}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
