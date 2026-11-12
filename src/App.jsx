import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import WhatTheySay from "./components/WhatTheySay";
import Work from "./components/Work";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="mt-30">
          <Hero></Hero>
          <AboutMe></AboutMe>
          <Work></Work>
          <Services></Services>
          <Skills></Skills>
          <WhatTheySay></WhatTheySay>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}

export default App;
