import React from 'react';
import './App.css';
import { Link, withRouter } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>Group Web App</h3>
            <p></p>
            <p></p>
            <ul className="nav-links">
                <Link to="/" style={navStyle} >
                    <li>Home</li>
                </Link>
                <Link to="/Exercises" style={navStyle} >
                    <li>Exercises</li>
                </Link>
                <Link to="/Rep-Counter" style={navStyle}>
                    <li>Rep Counter</li>
                </Link>
                <Link to="/Dashboard" style={navStyle}>
                    <li>Dashboard</li>
                </Link>
                <Link to="/Sign-In" style={navStyle}>
                    <li>Sign-Up/Sign-In Page</li>
                </Link>
            </ul>
        </nav >
    )
}

export default Nav;