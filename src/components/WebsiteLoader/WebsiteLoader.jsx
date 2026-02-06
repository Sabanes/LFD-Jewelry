"use client";
import { useState, useEffect } from 'react';
import './WebsiteLoader.css';

const WebsiteLoader = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar over 4 seconds
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1; // 100 / 100 steps for smooth animation
      });
    }, 40); // 4000ms / 100 steps = 40ms per step

    // Hide loader after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Call completion callback after fade out animation
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);



  return (
    <div className={`website-loader ${!isVisible ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">
          <img
            src="/LogosLFD/logoblack.png"
            alt="LFD Group logo"
          />
        </div>
        <div className="loader-progress-container">
          <div className="loader-bar">
            <div 
              className="loader-progress" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteLoader;