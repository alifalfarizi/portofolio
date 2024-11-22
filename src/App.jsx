import React from "react";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark min-h-screen text-light">
      <Navbar />
      <Contents/>
      <Footer/>
    </div>
  );
}

export default App;
