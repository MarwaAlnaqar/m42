import React from 'react';
import './style.css';
import OptionButton from '../Components/OptionButton';
import VideoBackground from '../Components/VideoBackground';

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
      <div className="box-container">
        {buttonItemList.map((item, index) => (
          <OptionButton key={index} option={item} />
        ))}
      </div>
    </VideoBackground>
  );
};

export default Home;
