import React from 'react';
import './index.css';
import DrawerAppBar from './Components/navbar';
import HomePortfolio from './Components/homePortfolio';

function App() {
  return(
    <div>
      <DrawerAppBar />
      <HomePortfolio />
    </div>
  );
}

export default App;