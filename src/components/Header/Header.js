import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Sidler from '../Sidler/Sidler';


const Header = () => {
    return (
        <div id="header">
            <MainMenu/>
            <Sidler/>
        </div>
    );
};

export default Header;