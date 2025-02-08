import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const TitleUpdater = ({ setIsLoading,isLoading }) => {
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true); 
    let title = 'Resistance'; 
    switch (location.pathname) {
      case '/':
        title = 'Home';
        break;
      case '/course':
        title = 'Course';
        break;
      case '/coaching':
        title = 'Coaching';
        break;
      case '/pricing':
        title = 'Pricing';
        break;
      case '/transformations':
        title = 'Transformations';
        break;
      case '/blog':
        title = 'Blog';
        break;
      case '/enroll':
        title = 'Enroll';
        break;
      default:
        title = 'Resistance';
    }
    let intervalId;
    if (isLoading) {
      let dots = 0;
      intervalId = setInterval(() => {
        document.title = `${title}${'.'.repeat(dots)}`; 
        dots = (dots + 1) % 4; 
      }, 500); 
    } else {
      document.title = title;
    }
    const favicon = document.getElementById('favicon');
    if (favicon) {
      favicon.href = `/assets/${location.pathname === '/' ? 'home' : location.pathname.slice(1)}-favicon.png`;
    }
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1000); 

    return () => {
      clearTimeout(timer);
      clearInterval(intervalId);
    };
  }, [location.pathname, setIsLoading, isLoading]);

  return null; 
};

export default TitleUpdater;