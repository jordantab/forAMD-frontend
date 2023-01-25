import './SurprisePage.css'
import { useNavigate } from 'react-router-dom'

function SurprisePage() {
    
    const hist = useNavigate()

    function startPuzzle() {
        hist('/firstpuzzle')
    }

    return (
        <div className='container'>
            <div className="welcome-note">
                 <h2>Welcome Alexandra</h2>
                 <h3>For Valentine's Day, I have prepared a series of puzzles and clues that will lead you to a special place. To begin, please press continue. 
                        Each clue will bring you closer to discovering the final destination. Good luck and have fun!</h3>
                <button className='button' onClick={startPuzzle}>Continue</button>
            </div>
        </div>
    )
}

export default SurprisePage