import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation.jsx';
import { Outlet, BrowserRouter as Router } from 'react-router-dom';



function App () {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default App;