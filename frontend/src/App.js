import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Welcome from './Welcome.js';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
        </Router>
    );
};

export default App;