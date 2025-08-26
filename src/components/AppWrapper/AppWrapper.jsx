"use client";
import { useState, useEffect } from 'react';
import WebsiteLoader from '../WebsiteLoader/WebsiteLoader';

const AppWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if this is the first visit during this session
    const hasVisited = sessionStorage.getItem('lfd-website-loaded');
    
    if (hasVisited) {
      // Skip loader for subsequent navigation within the same session
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
    // Mark as visited in this session
    sessionStorage.setItem('lfd-website-loaded', 'true');
  };

  return (
    <>
      {isLoading && <WebsiteLoader onLoadingComplete={handleLoadingComplete} />}
      <div style={{ opacity: showContent ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        {children}
      </div>
    </>
  );
};

export default AppWrapper;