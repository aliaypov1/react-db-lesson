import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import axios from "axios";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Count from "./components/Count/Count";
import Product from "./components/Product/Product";
function App() {

  const navigate = useNavigate()
  useEffect(()=>{
    localStorage.getItem("token") ? navigate("/Product") : navigate("/registration")
  },[])

  return (
  <>
  <Routes>
    <Route></Route>
    {/* <Route path= '/' element={<h1>salam</h1>} /> */}
    <Route path="/registration" element={<Form/>} />
    <Route path="/Product" element={<Product/>}/>
  </Routes>
  
  </>
  );
}

export default App;
