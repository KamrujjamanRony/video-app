import React from "react";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
