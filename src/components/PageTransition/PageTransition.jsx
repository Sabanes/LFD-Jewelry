"use client";
import { useState, useEffect, createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import './PageTransition.css';

const TransitionContext = createContext();

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within PageTransition');
  }
  return context;
};

const PageTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const pathname = usePathname();
  const [previousPathname, setPreviousPathname] = useState(pathname);

  const startTransition = () => {
    setIsTransitioning(true);
  };

  useEffect(() => {
    if (pathname !== previousPathname) {
      setIsTransitioning(true);
      
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setPreviousPathname(pathname);
        setIsTransitioning(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [pathname, previousPathname, children]);

  return (
    <TransitionContext.Provider value={{ startTransition, isTransitioning }}>
      {/* Loader disabled for page transitions */}
      {/* {isTransitioning && (
        <div className="page-transition-overlay">
          <div className="page-transition-content">
            <div className="transition-logo">
              <img
                src="https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/LFD/ue5era1m9rnyqtd3vfql"
                alt="LFD Group logo"
              />
            </div>
            <div className="transition-loader">
              <div className="loader-bar">
                <div className="loader-progress"></div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      <div className={`page-content ${isTransitioning ? 'transitioning' : ''}`}>
        {displayChildren}
      </div>
    </TransitionContext.Provider>
  );
};

export default PageTransition;