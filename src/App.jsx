import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import { BrowserRouter as Router } from 'react-router-dom';


function App () {
    return (
        <Router>
        <Header />
    </Router>
    );
};

export default App;