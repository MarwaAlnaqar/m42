import React from 'react';
import './style.css';
import OptionButton from '../Components/OptionButton';
import VideoBackground from '../Components/VideoBackground';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
const Home = () => {
  console.log(import.meta.env.BASE_URL)
  const buttonItemList = [
    {
      name: 'hall6',
      src: 'hall6.svg',
      redirectPageName: "/home6/",
    },
    {
      name: 'hall18',
      src: 'hall18.svg',
      redirectPageName: "/home18/",
    },
    
  ];
    
  return (
    <VideoBackground className="home-container country-container">
      <div className="logo flex-center">
        <img  src={`${import.meta.env.BASE_URL}assets/m42/logo.svg`} alt="logo" />
      </div>

      {/* Navbar */}
<div className="row g-4 mt-auto mb-4">
        {buttonItemList.map((item, index) => (
          <OptionButton  length={buttonItemList.length} key={index} option={item} />
        ))}
      </div>
    </VideoBackground>
  );
};

export default Home;
