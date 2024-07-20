//imports
import React from 'react';






const Footer = () => {

    //get current year for footer
    const YearDisplay = new Date().getFullYear();


    return(
        <footer>
            <p>© {YearDisplay}</p>
        </footer>
    )
};



export default Footer;