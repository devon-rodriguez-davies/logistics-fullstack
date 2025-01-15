/* My starting point was to ask githib copilot for the following
I need a page that has a bar across the top containing a logo.

The rest of the page will be split between a side menu to the left and a main section to the right.*/

import React from 'react';
import './Home.css'; // Assuming you will create a CSS file for styling
import { TopBar } from '../Components/TopBar';
import SideMenu from '../Components/SideMenu';
import MainSection from '../Components/MainSection';

const Home = () => {
  return (
    <div className="home-container">
      <TopBar />
      <div className="content">
        <SideMenu />
        <MainSection />
      </div>
    </div>
  );
};

export default Home;
