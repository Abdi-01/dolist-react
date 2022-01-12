import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';


const Header = (props) => {

    return (
        <div class="topnav">
            <a class="active" href="#home"><h3>Do - List</h3></a>
            <div class="tengah">
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <div class="kanan">
                    <Link to="/register"><button class="navbar-btn btn btn-custom" id="register">Sign Up</button> </Link>
                    <Link to="/login"><button class="navbar-btn btn btn-custom" id="login">Log In</button> </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;