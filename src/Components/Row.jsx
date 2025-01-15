import React, { useState } from 'react';
import './Styles/Row.css';
import { sum } from '../Utils';

const Row = ({driver}) => {
    // Assuming everyoe has a forename and surname. Hopefully Cher doesn't become a driver.
    const formattedName = driver.forename + " " + driver.surname;

    // Assuming no special characters in the registration
    const formattedRegistration = driver.vehicleRegistration.length !== 7 ? driver.vehicleRegistration
        : driver.vehicleRegistration.toUpperCase().replace(/([A-Z0-9]{4})([A-Z0-9]{3})/, '$1 $2');

    const duration = sum(driver.traces.map(trace => sum(trace.activity.map(activity => activity.duration))));
    const activityDurations = driver.traces.reduce((acc, trace) => {
        trace.activity.forEach(activity => {
            if (acc[activity.type]) {
                acc[activity.type] += activity.duration;
            } else {
                acc[activity.type] = activity.duration;
            }
        });
        return acc;
    }, {
        available: 0,
        drive: 0,
        rest: 0,
        work: 0
    });

    const daysActive = driver.traces.filter(trace => trace.activity).map(trace => 
        {
            const date = new Date(trace.date);
            return date.getDay() - 1; //Monday is 0, Sunday is 6. -1 to match index later
        });

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
            <div className="text-component minutes">{duration}</div>
            {Object.keys(activityDurations).sort().map(key => (
                <div key={key} className="text-component minutes">
                    {activityDurations[key]}
                </div>
            ))}
            {Array.from({ length: 7 }).map((_, index) => (
                <div
                    key={index}
                    className={`day ${daysActive.includes(index) ? 'active' : ''}`}
                />
            ))}
        </div>
    );
};

export default Row;