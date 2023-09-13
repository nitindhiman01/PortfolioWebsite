import React from 'react';
import './index.css';
import DrawerAppBar from './Components/navbar';
import HomePortfolio from './Components/homePortfolio';
import AnimatedCursor from './Components/animatedCursor';
import SkillSection from './Components/skillSection';

function App() {
  return(
    <div>
      <AnimatedCursor />
      <div className='main-container'>
        <DrawerAppBar />
        <HomePortfolio />
      </div>
      <div>
        <SkillSection />
      </div>
    </div>
  );
}

export default App;