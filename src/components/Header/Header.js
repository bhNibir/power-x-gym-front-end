import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Slider from '../Slider/Slider';


const Header = () => {
    return (
        <div id="header">
            <div className="slider mb-5">
                <MainMenu/>
                <Slider/>
            </div>
        </div>
    );
};

export default Header;