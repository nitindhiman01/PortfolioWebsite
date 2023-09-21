import React from 'react';
import './index.css';
import DrawerAppBar from './Components/navbar';
import HomePortfolio from './Components/homePortfolio';
import AnimatedCursor from './Components/animatedCursor';
import SkillSection from './Components/skillSection';
import EduSection from './Components/eduSection';
import Footer from './Components/footer';

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
      <div>
        <EduSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;