// src/components/VideoBackground.jsx
import React from 'react';

export default function VideoBackground({ children }) {
  return (
    <>
      {/* Background video */}
      <div className="video-bg" aria-hidden="true">
        <video
          className="video-bg__media"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          // poster="/images/hero-poster.jpg"
        >
          {/* Prefer webm (smaller) with mp4 fallback */}
          <source  src={`${import.meta.env.BASE_URL}assets/m42/bgVideo.mp4`}  type="video/webm" />
          <source  src={`${import.meta.env.BASE_URL}assets/m42/bgVideo.mp4`}  type="video/mp4" />
        </video>

        {/* Optional dark overlay to improve text contrast */}
        <div className="video-bg__overlay" style={{backgroundImage:'../../public/assets/m42/shadow.svg'}} />
      </div>

      {/* Your page content sits above the video */}
      <div className="video-bg__content">
        {children ?? (
          <div className="hero">
            <h1>Your Headline</h1>
            <p>Tagline goes here.</p>
          </div>
        )}
      </div>
    </>
  );
}
