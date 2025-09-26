import { useState, useEffect, useCallback } from 'react';

export const useAnimation = () => {
  const [isDancing, setIsDancing] = useState(false);
  const [animationCount, setAnimationCount] = useState(0);

  const toggleDancing = useCallback(() => {
    setIsDancing(prev => !prev);
    if (!isDancing) {
      setAnimationCount(prev => prev + 1);
    }
  }, [isDancing]);

  const startDancing = useCallback(() => {
    setIsDancing(true);
    setAnimationCount(prev => prev + 1);
  }, []);

  const stopDancing = useCallback(() => {
    setIsDancing(false);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        toggleDancing();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [toggleDancing]);

  return {
    isDancing,
    animationCount,
    toggleDancing,
    startDancing,
    stopDancing
  };
};