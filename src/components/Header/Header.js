import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="container">
                <div className="navbar">
                    <div className="nav-brand">
                        <h3>Inner-City Rider</h3>
                    </div>
                    <div className="nav-link">
                        <Link to="/home">Home</Link>
                        <Link to="/destination">Destination</Link>
                        <Link to="blog">Blog</Link>
                        <Link to="/contact">contact</Link>
                        <Link className="active" to="/login">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;