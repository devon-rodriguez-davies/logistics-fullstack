import React from 'react';
import './Styles/SideMenu.css';
import { Button } from './Button';

const SideMenu = () => {
  return (
    <div className="side-menu" style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
      <Button selected>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </div>
  );
};

export default SideMenu;
