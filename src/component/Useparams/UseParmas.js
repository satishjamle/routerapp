import React from 'react'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from './Navbar';
import { User } from './User';
import { Error } from './Error';


export const UseParmas = () => {
  return (
    <>
    <Navbar/>
    
<BrowserRouter>
  <Routes>
    <Route exact path="/" Component={()=> <Home name ="Home"/> }></Route>

    <Route exact path="/About"Component={()=> <About name ="About"/> }></Route>
    <Route exact path="/contact"  Component={()=> <Contact name ="Contact"/> }></Route>
    <Route exact path='/user/:fname/:lname' Component={()=><User name='user'/>}></Route>
    <Route  Component={Error}></Route>

    
  </Routes>
</BrowserRouter>
    </>
  )
}
