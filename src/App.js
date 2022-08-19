import React, {useState, useEffect, useContext}  from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ExerciseDetailsPage from "./pages/ExerciseDetailsPage"
import Navbar from "./compnents/Navbar"
import Footer from './compnents/Footer'
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/exerciseDetail/:exerciseId" element={<ExerciseDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

