import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
    return (
        <div>
            <h1 className="center">Welkome</h1>
            <p>Click <Link to="/user-list">here</Link> to access the user list...</p>
        </div>
    )
}

export default WelcomeScreen;