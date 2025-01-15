import logo from '../Data/logo.png';
import './Styles/TopBar.css';

export const TopBar = () => {
    return (<div className="top-bar-padding">
        <div className="top-bar">
            <img src={logo} className="logo" alt="logistics-uk-logo" />
        </div>
      </div>);
}