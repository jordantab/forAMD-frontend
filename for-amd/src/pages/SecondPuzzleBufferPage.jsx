import CountdownClock from '../components/CountdownClock.jsx';
import './SecondPuzzleBufferPage.css'

const App = () => {
  const targetDate = new Date('2023-02-21T11:00:00');

  return (
    <div className='back'>
        <div className='large-text'>
            <p>Well Done!</p>
        </div>
        <div className="description">
            <p>The next step will be revealed in due time</p>
        </div>
      <CountdownClock targetDate={targetDate} />
      <div className="bottom-text">
        <p>Keep watch, the countdown has started!</p>
      </div>
    </div>
  );
};

export default App;
