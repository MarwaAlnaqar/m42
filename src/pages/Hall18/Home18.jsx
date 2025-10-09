import React from 'react';
import '../style.css';
import OptionButton from '../../Components/OptionButton';
import VideoBackground from '../../Components/VideoBackground';

const Home18 = () => {
  console.log(import.meta.env.BASE_URL)
  const buttonItemList = [
    {
      name: 'rasids_surveillance_platform',
      src: 'rasids_surveillance_platform.svg',
      redirectPageName: "/rasids18/",
    },
    {
      name: 'ctl_ai',
      src: 'ctl_ai.svg',
      redirectPageName: "/ctl_ai18/",
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
        <img  src={`${import.meta.env.BASE_URL}assets/m42/logo18.svg`} alt="logo" />
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

export default Home18;
