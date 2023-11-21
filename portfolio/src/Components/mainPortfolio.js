import React from 'react';
import '../index.css';
import DrawerAppBar from './navbar';
import HomePortfolio from './homePortfolio';
import AnimatedCursor from './animatedCursor';
import SkillSection from './skillSection';
import EduSection from './eduSection';
import Footer from './footer';
import ExperienceSection from './expSection';
import WorkSection from './workSection';

function PortfolioHomePage() {
  return(
    <div>
        <AnimatedCursor />
        <div className='main-container'>
            <DrawerAppBar />
            <HomePortfolio />
        </div>
        <SkillSection />
        <EduSection />
        <ExperienceSection />
        <WorkSection /> 
        <Footer />
    </div>
  );
}

export default PortfolioHomePage;