import React from 'react';
import { Link} from 'react-router-dom';
import Login from './Login.js';
import Logout from './Logout.js';

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
                <Login />
                <Logout />
            </ul>
        </nav >
    )
}

export default Nav;