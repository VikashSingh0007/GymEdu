import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Home';
        break;
      case '/course':
        document.title = 'Course';
        break;
      case '/coaching':
        document.title = 'Coaching';
        break;
      case '/pricing':
        document.title = 'Pricing';
        break;
      case '/transformations':
        document.title = 'Transformations';
        break;
      case '/blog':
        document.title = 'Blog';
        break;
      case '/enroll':
        document.title = 'Enroll';
        break;
      default:
        document.title = 'Resistance';
    }
  }, [location.pathname]);

  return null; 
};
export default TitleUpdater;