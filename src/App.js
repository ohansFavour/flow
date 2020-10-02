import React from "react";
import "./App.css";
import Barb from "./components/Barb/Barb";
import Begin from "./components/Begin/Begin";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Last from "./components/Last/Last";
import Process from "./components/Process/Process";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Barb />
      <Process />
      <Begin />
      <Footer />
      <Last />
    </div>
  );
}

export default App;
