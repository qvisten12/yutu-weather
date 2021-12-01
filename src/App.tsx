import React from "react";
import Searchbar from "./components/Searchbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./components/Weather";

function App() {
  return (
    <Router>
      <div className="bg-white h-screen">
        <Routes>
          <Route path="/weather/:location" element={<Weather />} />
          <Route path="/" element={<Searchbar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
