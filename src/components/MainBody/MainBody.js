import React from 'react';
import Footer from '../Footer/Footer';

const MainBody = ({children}) => {
    return (
        <>  
            {children}
            <Footer/>
        </>
    );
};

export default MainBody;