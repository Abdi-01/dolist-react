import React from 'react';
import './Home.css';


const HomePage = (props) => {

    return (
        <div class="topnav">
        <a class="active" href="#home"><h3>Do - List</h3></a>
            <div class="tengah">
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
            <ul class="kanan">
					<button class="navbar-btn btn btn-custom" id="sign-up">Sign Up</button>
					<button class="navbar-btn btn btn-custom" id="login">Log In</button>
				</ul>
      </div>
      </div>
    )
}

export default HomePage;