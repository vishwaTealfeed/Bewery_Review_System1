import React from "react";
import Navbar from "../src/components/Navbar";
import "./App.css";
import { DetailCard } from "./components/Detail-Card/detail-card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/brewer/:id" element={<DetailCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
