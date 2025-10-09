// src/components/imageBackground.jsx
import React from 'react';

export default function ImageBg({ children,isVideo=true,bgFullLink }) {
  
  return (
    <>
      {/* Background video */}
      <div className="video-bg" aria-hidden="true">
        <div className="video-bg__media" style={{backgroundImage: `url(${bgFullLink})`}}></div>
       

        {/* Optional dark overlay to improve text contrast */}
        <div className="video-bg__overlay" style={{backgroundImage:'../../public/assets/m42/shadow.svg'}} />
      </div>

      {/* Your page content sits above the video */}
      <div className="video-bg__content">
        {children ?? (
          <div className="hero">
            {/* <h1>Your Headline</h1>
            <p>Tagline goes here.</p> */}
          </div>
        )}
      </div>
    </>
  );
}
