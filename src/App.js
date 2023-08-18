import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/Notes/NotesState";
// import Alert from "./components/Alert";
export default function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </NoteState>
  );
}
