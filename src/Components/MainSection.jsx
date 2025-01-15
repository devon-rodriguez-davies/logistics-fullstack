import React from 'react';
import './Styles/MainSection.css';
import Drivers from '../Data/drivers.json';
import Row from './Row';

const SearchBox = () => {
    return (
        <input className="searchbox" type="text" placeholder="Search for Driver..." />
    );
};

const Table = () => {
    return (
        <>
            {Drivers.data.map((driver, index) => (<Row key={index} driver={driver} firstRow={index===0}/>))}
        </>
    );
};

const MainSection = () => {
    return (
        <div className='main-section'>
            <SearchBox />
            <Table />
        </div>
    );
};

export default MainSection;