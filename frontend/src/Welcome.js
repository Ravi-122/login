import React from "react";
import './welcome.css';

const Welcome = () => {
    const username = localStorage.getItem('username');

    const handleLogout = () => {
        localStorage.removeItem('username');
        window.location.href = "/";
    };

    return (
        <div className="welcome-page">
            <div className="welcome-container">
                <h1>Welcome, {username}!</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Welcome;