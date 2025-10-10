import React from 'react';
// import './style.css';
import '../style.css';
import OptionButton from '../../Components/OptionButton';
import VideoBackground from '../../Components/VideoBackground';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
const Home6 = () => {
  console.log(import.meta.env.BASE_URL)
  const buttonItemList = [
    {
      name: 'rasids_surveillance_platform',
      src: 'rasids_surveillance_platform.svg',
      redirectPageName: "/rasids6/",
    },
    {
      name: 'ctl_ai',
      src: 'ctl_ai.svg',
      redirectPageName: "/ctl_ai6/",
    },
    {
      name: 'one_health',
      src: 'one_health.svg',
      redirectPageName: "/one_health6/",
    },
     {
      name: 'global',
      src: 'global.svg',
      redirectPageName: "/global6/",
    },
    
  ];
    
  return (
    <VideoBackground className="home-container country-container ">
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

export default Home6;

