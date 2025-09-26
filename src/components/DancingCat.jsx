import catSvg from '../assets/images/cat.svg';
import { useAnimation } from '../hooks/useAnimation';
import '../styles/DancingCat.css';

const DancingCat = () => {
  const {
    isDancing,
    animationCount,
    animationSpeed,
    toggleDancing,
    changeSpeed,
    getAnimationDuration
  } = useAnimation();

  const getSpeedLabel = (speed) => {
    if (speed === 0.5) return '🐌 Slow';
    if (speed === 1) return '🚶 Normal';
    if (speed === 2) return '🏃 Fast';
    return `${speed}x`;
  };

  return (
    <div className="dancing-cat-container">
      <img
        src={catSvg}
        alt="Dancing Cat"
        className={`dancing-cat ${isDancing ? 'dancing' : ''}`}
        onClick={toggleDancing}
        role="button"
        tabIndex={0}
        style={{
          '--animation-speed': animationSpeed
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDancing();
          }
        }}
      />
      <div className="controls">
        <button
          className="dance-button"
          onClick={toggleDancing}
        >
          {isDancing ? '⏸️ Stop Dancing' : '▶️ Start Dancing'}
        </button>

        <div className="speed-controls">
          <h3>🎛️ Speed Control</h3>
          <div className="speed-buttons">
            <button
              className={`speed-button ${animationSpeed === 0.5 ? 'active' : ''}`}
              onClick={() => changeSpeed(0.5)}
            >
              🐌 Slow
            </button>
            <button
              className={`speed-button ${animationSpeed === 1 ? 'active' : ''}`}
              onClick={() => changeSpeed(1)}
            >
              🚶 Normal
            </button>
            <button
              className={`speed-button ${animationSpeed === 2 ? 'active' : ''}`}
              onClick={() => changeSpeed(2)}
            >
              🏃 Fast
            </button>
          </div>
          <p className="current-speed">Current: {getSpeedLabel(animationSpeed)}</p>
        </div>

        <div className="dance-counter">
          <p>Dance Count: {animationCount}</p>
          <p className="keyboard-hint">💡 Space: toggle | 1,2,3: speed control</p>
        </div>
      </div>
    </div>
  );
};

export default DancingCat;