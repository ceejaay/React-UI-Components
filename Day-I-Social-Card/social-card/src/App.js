import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js'
import CardContainer from './components/CardComponents/CardContainer.js'
import Footer from './components/FooterComponents/Footer.js'
const App = () => {
  return (
    <div className='appContainer'>
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
