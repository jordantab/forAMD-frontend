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
                    .pauseFor(1000)
                    .changeDelay(70)
                    .typeString("The night was still, the stars above,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("A grand ship sailed, with grace and love.")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("But all was not well, as danger drew near,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("A chilling encounter, and a tale of fear.")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("What date did the stars, watch with a frown")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("As the grand ship was brought crashing down?")
                    .pauseFor(2000)
                    .callFunction(answerInput)
                    .start()
                }}/>
                {riddleDone ?
                <>
                    <div className='answer-input-1'>
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