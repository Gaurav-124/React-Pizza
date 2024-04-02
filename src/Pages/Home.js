import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../assets/pizzas.jpg';
import '../styles/Home.css'
function Home() {
  return (
    <div className='home'  style={{backgroundImage: `url(${Banner})`}}>
      <div className="headerContainer">
        <h1>Pizza</h1>
        <p>pizza to fit any taste</p>
        <Link to="/menu">
        <button className='btn'>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
