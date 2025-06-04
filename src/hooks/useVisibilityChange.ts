import { useEffect, useState } from 'react';

/**
 * Hook to detect when the page visibility changes
 * This is useful for pausing videos when the user switches tabs
 */
const useVisibilityChange = (): boolean => {
  const [isVisible, setIsVisible] = useState(!document.hidden);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isVisible;
};

export default useVisibilityChange;