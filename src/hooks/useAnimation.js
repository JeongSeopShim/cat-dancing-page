import { useState, useEffect, useCallback } from 'react';

export const useAnimation = () => {
  const [isDancing, setIsDancing] = useState(false);
  const [animationCount, setAnimationCount] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1); // 1 = normal speed
  const [danceStyle, setDanceStyle] = useState('classic'); // classic, spinning, shaking, pulsing, waving, flipping

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

  const changeDanceStyle = useCallback((style) => {
    setDanceStyle(style);
  }, []);

  const getAnimationDuration = useCallback((baseDuration) => {
    return baseDuration / animationSpeed;
  }, [animationSpeed]);

  const getDanceStyleLabel = useCallback((style) => {
    const styles = {
      classic: '💃 Classic',
      spinning: '🌀 Spinning',
      shaking: '🎾 Shaking',
      pulsing: '💓 Pulsing',
      waving: '🌊 Waving',
      flipping: '🔄 Flipping'
    };
    return styles[style] || style;
  }, []);

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
      } else if (event.code === 'KeyQ') {
        changeDanceStyle('classic');
      } else if (event.code === 'KeyW') {
        changeDanceStyle('spinning');
      } else if (event.code === 'KeyE') {
        changeDanceStyle('shaking');
      } else if (event.code === 'KeyR') {
        changeDanceStyle('pulsing');
      } else if (event.code === 'KeyT') {
        changeDanceStyle('waving');
      } else if (event.code === 'KeyY') {
        changeDanceStyle('flipping');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [toggleDancing, changeSpeed, changeDanceStyle]);

  return {
    isDancing,
    animationCount,
    animationSpeed,
    danceStyle,
    toggleDancing,
    startDancing,
    stopDancing,
    changeSpeed,
    changeDanceStyle,
    getAnimationDuration,
    getDanceStyleLabel
  };
};