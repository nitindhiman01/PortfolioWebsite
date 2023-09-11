import React from 'react';
import './index.css';
import DrawerAppBar from './Components/navbar';
import HomePortfolio from './Components/homePortfolio';
import AnimatedCursor from './Components/animatedCursor';

function App() {
  return(
    <div>
      <AnimatedCursor />
      <div className='main-container'>
        <DrawerAppBar />
        <HomePortfolio />
      </div>
    </div>
  );
}

export default App;