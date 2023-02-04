import './SurprisePage.css'
import { useNavigate } from 'react-router-dom'
import Typewriter from "typewriter-effect"

function SurprisePage() {
    const hist = useNavigate()

    function startPuzzle() {
        hist('/firstpuzzle')
    }

    return (
        <div className='container'>
            <div className='welcome-note'>
            <Typewriter 
            onInit={(typewriter) => {
                typewriter
                .changeDelay(50)
                .changeDeleteSpeed(0.1)
                .typeString("Welcome Alexandra...")
                .pauseFor(2500)
                .deleteAll()
                .pauseFor(2500)
                .deleteAll()
                .typeString("A challenge awaits with clues to decipher...")
                .pauseFor(2500)
                .deleteAll()
                .pauseFor(2500)
                .typeString("Solve the mystery to unlock the surprise...")
                .pauseFor(5000)
                .callFunction(startPuzzle)
                .start()
            }}
            />
            </div>
        </div>
    )
}

export default SurprisePage