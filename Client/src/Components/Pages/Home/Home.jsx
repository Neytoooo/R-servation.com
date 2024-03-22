import React from 'react';
import Header from '../../Layout/Header/Header';
import Slider from '../../Layout/Slider/Slider';
import SearchBar from '../../Layout/SearchBar/SearchBar';
import TopDestinations from '../../Layout/TopDestinations/TopDestination';
import Card from '../../Layout/Card/Card';
import './Home.css'; 

const sliderImages = [
    '/Image1.jpg',
    '/Image2.jpg',
    '/Image3.jpg',
];



function Home() {
  return (
    <div className="home">
      
      <div className="content">
        <SearchBar />
        <div className="main-content">
          <Slider images={sliderImages} />
          <TopDestinations />
        </div>
      </div>
      <div className='cards'>
      
      <Card query="New York" />


    </div>
    </div>
  );
}

export default Home;
