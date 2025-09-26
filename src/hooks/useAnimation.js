import { useState, useEffect, useCallback } from 'react';

export const useAnimation = () => {
  const [isDancing, setIsDancing] = useState(false);
  const [animationCount, setAnimationCount] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1); // 1 = normal speed

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

  const changeSpeed = useCallback((speed) => {
    setAnimationSpeed(speed);
  }, []);

  const getAnimationDuration = useCallback((baseDuration) => {
    return baseDuration / animationSpeed;
  }, [animationSpeed]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        toggleDancing();
      } else if (event.code === 'Digit1') {
        changeSpeed(0.5); // Slow
      } else if (event.code === 'Digit2') {
        changeSpeed(1); // Normal
      } else if (event.code === 'Digit3') {
        changeSpeed(2); // Fast
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [toggleDancing, changeSpeed]);

  return {
    isDancing,
    animationCount,
    animationSpeed,
    toggleDancing,
    startDancing,
    stopDancing,
    changeSpeed,
    getAnimationDuration
  };
};