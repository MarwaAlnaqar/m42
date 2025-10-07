





import React, { useState } from 'react';
import './QuestionsPage.css';
import OptionBox from '../Components/OptionBox';
import VideoBackground from '../Components/VideoBackground';
import IframePopup from '../Components/IframePopup';

const OneHealthPage = () => {
  const [popupData, setPopupData] = useState(null);

  const backItem = {
    name: 'Back',
    icon: `/assets/r42/back.png`,
    redirectPageName: ''
  };

  const closeItem = {
    name: 'Close',
    icon: `/assets/r42/close.png`,
    redirectPageName: ''
  };

  const buttonItemList = [
    {
      name: 'Video',
      type: 'video',
      icon: `/assets/r42/video.png`,
      link: 'https://player.castr.com/live_8005c6e07e4911f0b36595c94a84f69d'
    },
    {
      name: 'Web Demo',
      type: 'webDemo',
      icon: `/assets/r42/web_demo.png`,
      link: 'https://www.google.com'
    },
    {
      name: 'More Info',
      type: 'info',
      icon: `/assets/r42/info.png`,
      link: ''
    }
  ];

  const handleOpenPopup = (item) => {
    console.log('Clicked item:', item);
    setPopupData(item);
  };

  return (
    <VideoBackground className="RasidsPage-container country-container">
      {/* Logo */}
      <div className="logo flex-center">
        <img src={`/assets/r42/logo.svg`} alt="logo" />
      </div>

      {/* Page title */}
      <div className="content-container">
        <div className="page_Title">
        <h3>ONE HEALTH PLATFORM</h3>
        </div>

        {/* Buttons */}
        <div className="box-container">
          {buttonItemList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleOpenPopup(item)}
              className="button-option"
            >
              <img className="button_icon" src={item.icon} alt={item.name} />
              <div className="button-title">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Back button */}
      <div className="back-button">
        <OptionBox option={backItem} IsBack={true} />
      </div>

      {/* Popup */}
      {popupData && (
        <div className="popup-overlay">
          <IframePopup
            show={true}
            onClose={() => setPopupData(null)}
            data={popupData} // ✅ correct prop
          />
          <div className="close-button">
            {/* <OptionBox option={closeItem} onClick={() => setPopupData(null)} /> */}
               <div
              
              onClick={() => setPopupData(null)}
              className="button-option"
            >
              <div className="button-title">{closeItem.name}</div>
              <img className="button_icon" src={closeItem.icon} alt={closeItem.name} />
            </div>
          </div>
        </div>
      )}
    </VideoBackground>
  );
};

export default OneHealthPage;
