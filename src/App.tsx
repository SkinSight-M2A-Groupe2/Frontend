import React from 'react';
import './App.css';
// import SideBar from './components/common/SideBar/SideBar';
import SideBar from 'src/components/common/SideBar/SideBar';
import OptionsBar from './components/common/optionsBar/OptionsBar';
import HomePage from './components/specific/homePage/HomePage';

function App() {
  return (
    <div className="App">
      <SideBar />
      <HomePage />
      <OptionsBar />
    </div>
  );
}

export default App;
