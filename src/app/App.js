import React from "react";
import AboutMe from "../components/AboutMe";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import GlobalStyles from "../theme/globalStyles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Navbar />
      <div className="App">
        <Home />
        <AboutMe />
      </div>
    </React.Fragment>
  );
}

export default App;
