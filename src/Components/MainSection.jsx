import React from 'react';
import './Styles/MainSection.css';
import Drivers from '../Data/drivers.json';
import Row from './Row';

const SearchBox = () => {
    return (
        <input className="searchbox" type="text" placeholder="Search for Driver..." />
    );
};

const TableHeader = () => {
    return (
        <div className='header'>
            <div className="header-spacing" />
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                <div key={index} className="dayheader">{day}</div>)
            )}
        </div>
    );
};

const Table = () => {
    return (
        <>
            {Drivers.data.map((driver, index) => (<Row key={index} driver={driver}/>))}
        </>
    );
};

const MainSection = () => {
    return (
        <div className='main-section'>
            <SearchBox />
            <TableHeader />
            <Table />
        </div>
    );
};

export default MainSection;