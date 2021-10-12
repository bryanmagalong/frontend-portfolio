import React from 'react';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import GlobalStyles from '../theme/globalStyles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Navbar />
      <div className="App">
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;
