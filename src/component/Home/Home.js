import React from 'react';
import img from '../../photos/main-photo.png';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="img-container">
                <h1 className="heading">Wow Course</h1>
                <img src={img} alt="" />    
            </div>
            <div className="nav-container">
                <nav>
                     <a href="/home">Home</a>
                     <a href="/contact us">Contact us</a>
                     <a href="/about us">About us</a>
                </nav>
            </div>
        </div>
    );
};

export default Home;