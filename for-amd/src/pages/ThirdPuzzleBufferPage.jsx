import CountdownClock from '../components/CountdownClock.jsx';
import './ThirdPuzzleBufferPage.css'

const ThirdPuzzleCountdown = () => {
  const targetDate = new Date('April 14, 2023 04:00:00 EST');
  const targetUtcTimestamp = Date.UTC(targetDate.getUTCFullYear(), targetDate.getUTCMonth(), targetDate.getUTCDate(), targetDate.getUTCHours(), targetDate.getUTCMinutes(), targetDate.getUTCSeconds());

  return (
    <div className='back'>
        <div className='large-text'>
            <p>Almost There!</p>
        </div>
        <div className="description">
            <p>Come back on April 14th for the last clue </p>
        </div>
      <CountdownClock targetDate={targetUtcTimestamp} />
      <div className="bottom-text">
        <p>Happy Waiting!</p>
      </div>
    </div>
  );
};

export default ThirdPuzzleCountdown;
