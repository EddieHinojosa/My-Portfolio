import React from 'react';
import Navigation from './Navigation';


const Header = () => {
    return (
        //addbackgrounf image to header

        <header background-image="" className="bg-gray-800 text-white p-4" >
        <div className="container mx-auto">
            <h1 classNAme="col-span-1">My Portfolio</h1>
            <Navigation class="col-span-4"/>
        </div>  
        </header>
    )
};



export default Header;