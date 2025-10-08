import React from 'react';
import './QuestionsPage.css';
import OptionButton from '../Components/OptionButton';
import VideoBackground from '../Components/VideoBackground';

const HomeH18 = () => {
  console.log(import.meta.env.BASE_URL)
  const buttonItemList = [
    {
      name: 'rasids_surveillance_platform',
      src: 'rasids_surveillance_platform.svg',
      redirectPageName: "/rasids/",
    },
    {
      name: 'ctl_ai',
      src: 'ctl_ai.svg',
      redirectPageName: "/ctl_ai/",
    },
    // {
    //   name: 'one_health',
    //   src: 'one_health.svg',
    //   redirectPageName: "/one_health/",
    // },
  ];
    
  return (
    <VideoBackground className="home-container country-container">
      <div className="logo flex-center">
        <img  src={`${import.meta.env.BASE_URL}/assets/r42/logo.svg`} alt="logo" />
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

export default HomeH18;
