import React, { useState } from 'react';
import '../style.css';
import OptionBox from '../../Components/OptionBox';
import ImageBg from'../../Components/ImageBg';
import IframePopup from '../../Components/IframePopup';
import { useNavigate } from 'react-router-dom';
const CtlAiPage18 = () => {
  const [popupData, setPopupData] = useState(null);
 const navigate = useNavigate();

 
  const backItem = {
    name: 'Back',
    icon: `back.png`,
    isBack:true,
    redirectPageName: ''
  };

  const closeItem = {
    name: 'Close',
    icon: `close.png`,
    redirectPageName: ''
  };
const bgLink=`${import.meta.env.BASE_URL}assets/m42/ctl_aiBg.svg`;
  const buttonItemList = [
    // {
    //   name: 'Video',
    //   type: 'video',
    //   icon: `video.png`,
    //   link: 'https://player.castr.com/live_8005c6e07e4911f0b36595c94a84f69d'
    // },
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

  const handleOpenPopup = (item) => {
    console.log('Clicked item:', item);
    setPopupData(item);
  };

  return (
    // <VideoBackground className="RasidsPage-container country-container">
      <ImageBg className="RasidsPage-container country-container" isVideo={false} bgFullLink={bgLink} >
      
       <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
      <div>
 {/* Logo */}
      <div className="logo flex-center">
       <img  src={`${import.meta.env.BASE_URL}assets/m42/logo18.svg`} alt="logo" />
      </div>

      {/* Page title */}
      <div className="content-container">
        <div >
          <h3 className="page_Title">CTL AI</h3>
          <h3 className='page_subtitle'>(Central Testing Lab AI)</h3>
        </div>

        {/* Buttons */}
        <div className="box-container">
          {buttonItemList.map((item, index) => (
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
    </ImageBg>
  );
};

export default CtlAiPage18;
