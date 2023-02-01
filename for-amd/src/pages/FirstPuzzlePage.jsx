import './FirstPuzzlePage.css'
import FirstPuzzleAnswer from '../components/FirstPuzzleAnswer'
import Typewriter from "typewriter-effect"

function FirstPuzzlePage() {
    const riddle = "I'm a fateful day,\n A day of tragedy,\n A ship set sail but not to reach its destiny,\n I'm a date etched in history,\n The 'unsinkable' ship's final voyage,\n is key to my identity,      What date am I?"
    return (
        <div>
            <div className="puzzle-1">
                <div className='riddle'>
                <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    .typeString(riddle)
                    .start()
                }}/>
                </div>
                
            </div>
            <div className='answer-input'>
                <FirstPuzzleAnswer/>
            </div>
        </div>
    )
}

export default FirstPuzzlePage