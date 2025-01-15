import React, { useState } from 'react';
import './Styles/Row.css';

const Row = ({driver}) => {
    // Assuming everyoe has a forename and surname. Hopefully Cher doesn't become a driver.
    const formattedName = driver.forename + " " + driver.surname;

    // Assuming no special characters in the registration
    const formattedRegistration = driver.vehicleRegistration.length !== 7 ? driver.vehicleRegistration
        : driver.vehicleRegistration.toUpperCase().replace(/([A-Z0-9]{4})([A-Z0-9]{3})/, '$1 $2');

    return (
        <div className="row">
            <div 
                id="driver" 
                className="text-component driver" 
                title={formattedName}
            >
                {formattedName}
            </div>
            <div className="text-component registration">{formattedRegistration}</div>
            <div className="text-component minutes">10</div>
            {Array.from({ length: 7 }).map((_, index) => (
                <div
                    key={index}
                    className={`day ${true ? 'active' : ''}`}
                />
            ))}
        </div>
    );
};

export default Row;