import React from 'react';
import './Styles/SideMenu.css';
import Pages from '../Data/menu.json';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, ...props }) => {
  const navigate = useNavigate();

  const clicked = (url) => {
      console.info("clicked", url);
      navigate(url);
  };
  const { selected, url } = props;
  return selected ? (<div className="button selected">{children}</div>) :
                    (<div className="button" onClick={() => clicked(url)}>{children}</div>);
}

const SideMenu = () => {
  return (
    <div className="side-menu" style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
    {Pages.data.map((page, index) => (
        <Button key={index} selected={index==0} url={page.url}>{page.title}</Button>))}
    </div>
  );
};

export default SideMenu;
