import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Slider from '../Slider/Slider';


const Header = () => {
    return (
        <div id="header">
            <MainMenu/>
            <Slider/>
        </div>
    );
};

export default Header;