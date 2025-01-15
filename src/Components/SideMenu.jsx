import React from 'react';
import './Styles/SideMenu.css';
import Pages from '../Data/menu.json';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, ...props }) => {
  const navigate = useNavigate();

  const clicked = (url) => {
      navigate(url);
  };
  const { url } = props;
  return (<div className="button" onClick={() => clicked(url)}>{children}</div>);
}

const SideMenu = () => {
  return (
    <div className="side-menu" style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
    {Pages.data.map((page, index) => (
        <Button key={index} url={page.url}>{page.title}</Button>))}
    </div>
  );
};

export default SideMenu;
