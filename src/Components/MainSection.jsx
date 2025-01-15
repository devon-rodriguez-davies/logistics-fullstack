import React from 'react';
import './Styles/MainSection.css';

const SearchBox = () => {
    return (
        <input type="text" placeholder="Search for Driver..." />
    );
};

const EmptyComponent = () => {
    return (
        <div>
            {/* Empty component */}
        </div>
    );
};

const MainSection = () => {
    return (
        <div className='main-section'>
            <SearchBox />
            <EmptyComponent />
        </div>
    );
};

export default MainSection;