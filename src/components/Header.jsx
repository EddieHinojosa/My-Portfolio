import React from 'react';
import Navigation from './Navigation';


const Header = () => {
    return (
        //add background image to header

        <header background-image="" className="bg-gray-800 text-white p-4" >
        <div className="container mx-auto row-auto">
            <h1 className="col-span-1">My Portfolio</h1>
            <Navigation class="row-auto"/>
        </div>  
        </header>
    )
};



export default Header;