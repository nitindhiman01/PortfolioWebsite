import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import PortfolioHomePage from './Components/mainPortfolio';
import BlogWebsite from './Components/blogWebsite';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<PortfolioHomePage />}></Route>
          <Route path='/blogwebsite' element={<BlogWebsite />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <PortfolioHomePage /> */}
    </div>
  );
}

export default App;