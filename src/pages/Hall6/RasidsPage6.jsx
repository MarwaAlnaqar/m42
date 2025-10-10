



import React, { useState } from 'react';
import '../style.css';
import OptionBox from '../../Components/OptionBox';
import VideoBackground from '../../Components/VideoBackground';
import IframePopup from '../../Components/IframePopup';
import { useNavigate } from 'react-router-dom';
const RasidsPage6 = () => {
  const [popupData, setPopupData] = useState(null);
 const navigate = useNavigate();
 const pageTitle='RASID Surveillance Platform';
  const backItem = {
    name: 'Back',
    icon: `back.png`,
    redirectPageName: ''
  };

  const closeItem = {
    name: 'Close',
    icon: `close.png`,
    redirectPageName: ''
  };

  const RasidsItemList = [
    {
      name: 'Video',
      type: 'video',
      icon: `video.png`,
      
      // link: 'https://player.castr.com/live_8005c6e07e4911f0b36595c94a84f69d'
      // link: 'https://vimeo.com/1126090398?fl=pl&fe=sh'
            link:"https://player.vimeo.com/video/1126090398?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&title=0&byline=0&portrait=0&controls=0"

    },
    {
      name: 'Web Demo',
      type: 'webDemo',
      icon: `web_demo.png`,
      link: 'https://www.google.com'
    },
    {
      name: 'More Info',
      type: 'info',
      icon: `info.png`,
      link: ''
    }
  ];
const bgLink=`${import.meta.env.BASE_URL}assets/m42/rasids6.svg`;
  const handleOpenPopup = (item) => {
    console.log('Clicked item:', item);
    setPopupData(item);
  };

  return (
    <VideoBackground className="RasidsPage-container country-container" isVideo={false} bgFullLink={bgLink} >
      <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
        <div >
            {/* Logo */}
            <div className="logo flex-center">
            <img  src={`${import.meta.env.BASE_URL}assets/m42/logo.svg`} alt="logo" />
            </div>

            {/* Page title */}
            <div className="content-container">
              <div className="page_Title">
              <h3>{pageTitle}</h3>
              </div>

              {/* Buttons */}
              <div className="box-container">
                {RasidsItemList.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleOpenPopup(item)}
                    className="button-option"
                  >
                    <img className="button_icon" src={`${import.meta.env.BASE_URL}assets/m42/${item.icon}`} alt={item.name} />
                    <div className="button-title">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
        </div>
        {/* Back button */}
        <div className="back-button">
          {/* <OptionBox option={backItem} IsBack={true} /> */}
          <div
              
                onClick={() => navigate(-1)}
                className="button-option"
              >
                <div className="button-title">{backItem.name}</div>
                <img className="button_icon" src={`${import.meta.env.BASE_URL}assets/m42/${backItem.icon}`} alt={backItem.name} />
              </div>
        </div>
      </div>
      {/* Popup */}
     {popupData && (
             <div className="popup-overlay">
               <IframePopup
                 show={true}
                 onClose={() => setPopupData(null)}
                 data={popupData} // ✅ correct prop
               />
           
             </div>
           )}
    </VideoBackground>
  );
};

export default RasidsPage6;
