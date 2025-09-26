import catSvg from '../assets/images/cat.svg';
import { useAnimation } from '../hooks/useAnimation';
import '../styles/DancingCat.css';

const DancingCat = () => {
  const { isDancing, animationCount, toggleDancing } = useAnimation();

  return (
    <div className="dancing-cat-container">
      <img
        src={catSvg}
        alt="Dancing Cat"
        className={`dancing-cat ${isDancing ? 'dancing' : ''}`}
        onClick={toggleDancing}
        role="button"
        tabIndex={0}
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
        <div className="dance-counter">
          <p>Dance Count: {animationCount}</p>
          <p className="keyboard-hint">💡 Press Space or click to toggle!</p>
        </div>
      </div>
    </div>
  );
};

export default DancingCat;