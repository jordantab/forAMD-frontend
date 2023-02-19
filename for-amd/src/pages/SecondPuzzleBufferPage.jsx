import CountdownClock from '../components/CountdownClock.jsx';
import './SecondPuzzleBufferPage.css'

const App = () => {
  const targetDate = new Date('February 20, 2023 10:00:00 EST');
  const targetUtcTimestamp = Date.UTC(targetDate.getUTCFullYear(), targetDate.getUTCMonth(), targetDate.getUTCDate(), targetDate.getUTCHours(), targetDate.getUTCMinutes(), targetDate.getUTCSeconds());

  return (
    <div className='back'>
        <div className='large-text'>
            <p>Well Done!</p>
        </div>
        <div className="description">
            <p>The next step will be revealed in due time</p>
        </div>
      <CountdownClock targetDate={targetUtcTimestamp} />
      <div className="bottom-text">
        <p>Keep watch, the countdown has started!</p>
      </div>
    </div>
  );
};

export default App;
