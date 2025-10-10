// src/components/VideoBackground.jsx
import React from 'react';

export default function VideoBackground({ children,isVideo=true,bgFullLink }) {
  
  return (
    <>
      {/* Background video */}
      <div className="video-bg" aria-hidden="true">
        {isVideo? ( <video
          className="video-bg__media"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          // poster="/images/hero-poster.jpg"
        >
          {/* Prefer webm (smaller) with mp4 fallback */}
          <source  src="https://video-files.castr.net/vd22af3cd0a43f11f08003/R0rXywvyCfsOB7Pa.mp4" type="video/mp4" />
          <source  src="https://video-files.castr.net/vd22af3cd0a43f11f08003/R0rXywvyCfsOB7Pa.mp4"  type="video/mp4" />
        </video>):(<div className="video-bg__media" style={{backgroundImage: `url(${bgFullLink})`,backgroundSize: 'cover'}}></div>)}
       

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
