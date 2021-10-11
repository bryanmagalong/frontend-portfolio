import React from 'react';
import Navbar from '../components/Navbar';
import GlobalStyles from '../theme/globalStyles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Navbar />
      <div className="App">Hello World!</div>
    </React.Fragment>
  );
}

export default App;
