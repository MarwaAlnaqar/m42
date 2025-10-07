import React from 'react';
import './QuestionsPage.css';
import OptionButton from '../Components/OptionButton';
import VideoBackground from '../Components/VideoBackground';

const Home = () => {
  const buttonItemList = [
    {
      name: 'rasids_surveillance_platform',
      src: '/assets/r42/rasids_surveillance_platform.svg',
      redirectPageName: '',
    },
    {
      name: 'ctl_ai',
      src: '/assets/r42/ctl_ai.svg',
      redirectPageName: '',
    },
    {
      name: 'one_health',
      src: '/assets/r42/one_health.svg',
      redirectPageName: '',
    },
  ];

  return (
    <VideoBackground className="home-container country-container">
      <div className="logo flex-center">
        <img src="/assets/r42/logo.svg" alt="logo" />
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
