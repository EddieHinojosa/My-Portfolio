import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation.jsx';
import Contact from './pages/contact.jsx';
import { BrowserRouter as Router } from 'react-router-dom';



function App () {
    return (
        <Router>
            <Header />
            <Footer />
        </Router>
    );
};

export default App;