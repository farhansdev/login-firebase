import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Profile from "./Profile";
import "./index.css"

function App() {
  return (
    <>
     <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/Signup" element={<Signup />}> </Route>
    <Route path="/Profile" element={<Profile />}> </Route>
   </Routes>
   </BrowserRouter>
     </>
  
  )
}

export default App