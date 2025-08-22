"use client";
import { useState } from 'react';

const videoLinks = [
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/a69tzxqpxi1kjdgehuox",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/jpeutus83ylybuo56icr",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/hbolsr2jvbrxboiin163",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/alxzoyzlh9ayseglffwq",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/bgarhsmhncewvfvlu8ut",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/vw0n05bcal8ynmp9d8gw",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/d28adjbn6wt0uyil93ii",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/vh3gpn5usysswr9rul1k",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/kljyshqcw96m4ob6mfmx",
];

const VideoCard = ({ video, index }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  const handleVideoLoad = () => {
    setIsLoading(false);
    setShowLoader(false);
  };

  const handleVideoLoadStart = () => {
    setIsLoading(true);
    setShowLoader(true);
  };

  const handleVideoWaiting = () => {
    setShowLoader(true);
  };

  return (
    <div className="evento">
      <div className="video-container">
        {showLoader && (
          <div className="video-loader">
            <div className="loader-spinner"></div>
            <div className="loader-text">Loading</div>
          </div>
        )}
        <video
          src={video}
          muted
          loop
          autoPlay
          playsInline
          className="video-element"
          onLoadStart={handleVideoLoadStart}
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
          onWaiting={handleVideoWaiting}
        />
      </div>
    </div>
  );
};

const Eventos = () => {
  return (
    <section className="eventos-section" id="Eventos">
      <div className="eventos-grid">
        {videoLinks.map((video, index) => (
          <VideoCard key={index} video={video} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Eventos