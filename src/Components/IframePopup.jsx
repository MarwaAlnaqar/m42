import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function IframePopup({ show, onClose, data }) {
  if (!data) return null;
  const closeItem = {
    name: 'Close',
    icon: `close.png`,
    redirectPageName: ''
  };
  const renderPopUpContent = () => {
    switch (data.type) {
      case 'video':
        return (
          <iframe
            src={data.link}
            width="100%"
            style={{ aspectRatio: '16/9', minHeight: '845px' }}
           
            allow="autoplay; fullscreen"
            allowFullScreen
            title="video-popup"
          ></iframe>
        );

      case 'webDemo':
        // Render inside iframe instead of opening new tab
          window.open('https://www.google.com', '_blank');
          setTimeout(() => {
        onClose(); // ✅ Close popup right after opening new tab
      }, 300);
      return null; // stop rendering anything here
      case 'info':
        return (
          <div className="info-popup">
            <h3>Information</h3>
            <p>Details related to {data.name}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`custom-popup ${show ? 'visible' : ''}`}
      onClick={onClose}
    >
      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()}
      >
        {renderPopUpContent()}
         
        </div>
           <div className="close-button">
               <div
              
                  onClick={() => setPopupData(null)}
                  className="button-option"
                >
                  <div className="button-title">{closeItem.name}</div>
                            <img className="button_icon_close" src={`${import.meta.env.BASE_URL}assets/m42/${closeItem.icon}`} alt={closeItem.name} />

                  </div>
              </div>
    </div>
  );
}
