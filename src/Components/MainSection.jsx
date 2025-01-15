import React, { useState } from 'react';
import './Styles/MainSection.css';
import Drivers from '../Data/drivers.json';
import Row from './Row';

const SearchBox = ({ onSearch }) => {
    return (
        <input 
            className="searchbox" 
            type="text" 
            placeholder="Search for Driver..." 
            onChange={(e) => onSearch(e.target.value)} 
        />
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

const Table = ({ searchTerm }) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filteredDrivers = searchTerm ? Drivers.data.filter(driver => 
        driver.vehicleRegistration.toLowerCase().includes(lowerSearchTerm) ||
        driver.forename.toLowerCase().includes(lowerSearchTerm) ||
        driver.surname.toLowerCase().includes(lowerSearchTerm)
    ) : Drivers.data;

    return filteredDrivers.length > 0 ? (
        <>
            {filteredDrivers.map((driver, index) => (<Row key={index} driver={driver}/>))}
        </>
    ) : (<div className='no-drivers'>No drivers found</div>);
};

const MainSection = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='main-section'>
            <SearchBox onSearch={setSearchTerm} />
            <TableHeader />
            <Table searchTerm={searchTerm} />
        </div>
    );
};

export default MainSection;