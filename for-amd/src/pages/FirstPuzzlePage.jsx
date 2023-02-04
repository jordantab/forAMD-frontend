import './FirstPuzzlePage.css'
import FirstPuzzleAnswer from '../components/FirstPuzzleAnswer'
import Typewriter from "typewriter-effect"
import { useState } from 'react'

function FirstPuzzlePage() {
    const [riddleDone, setRiddleDone] = useState(false)

    function answerInput() {
        setRiddleDone(true)
    }
    return (
        <div>
            <div className="puzzle-1">
                <div className='riddle'>
                <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    .changeDelay(70)
                    .typeString("I'm a fateful day,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("A day of tragedy,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("A ship set sail but not to reach its destiny,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("I'm a date etched in history,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("The 'unsinkable' ship's final voyage,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("is key to my identity,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("What date am I?")
                    .pauseFor(1000)
                    .callFunction(answerInput)
                    .start()
                }}/>
                {riddleDone ?
                <>
                    <div className='answer-input'>
                        <FirstPuzzleAnswer/>
                    </div>
                </>
                :
                <></>
                }
                </div>
            </div>
        </div>
    )
}

export default FirstPuzzlePage