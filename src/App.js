// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Journal from './components/Journal/Journal';
import './App.css';

const App = () => {
    return (
        <Router>
            <Journal />
        </Router>
    );
};

export default App;
