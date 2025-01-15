import React from 'react';
import './Styles/SideMenu.css';
import { Button } from './Button';
import Pages from '../Data/menu.json';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="side-menu" style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
    {Pages.data.map((page, index) => (
        <Button key={index} selected={index==0} onClick={() => navigate(page.url)}>{page.title}</Button>))}
    </div>
  );
};

export default SideMenu;
