import './SecondPuzzlePage.css'
import SecondPuzzleAnswer from '../components/SecondPuzzleAnswer'
import Typewriter from "typewriter-effect"
import { useState } from 'react'


function SecondPuzzlePage() {
    const [riddleDone, setRiddleDone] = useState(false)
    function answerInput() {
        setRiddleDone(true)
    }
    return (
        <div>
            <div className="puzzle-2">
                <div className='riddle-2'>
                <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    .pauseFor(1000)
                    .changeDelay(70)
                    .typeString("By the azure Mediterranean sea,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("A city with allure and history.")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("Amidst the hills and coastal breeze,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("This place will put you at great ease.")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("<br>")
                    .typeString("Its name sounds pleasant to the ear,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("But it's not an answer that's so clear.")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("From ancient ruins to modern art,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("This city has played a pivotal part.")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("<br>")
                    .typeString("It's famous for its carnival and flowers,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("And it's been home to many powerful powers.")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("A seaside walkway that's known so well,")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("And a castle hill that truly excels.")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("<br>")
                    .typeString("So can you guess the city in question?")
                    .pauseFor(700)
                    .typeString("<br>")
                    .typeString("It's a challenge that may leave you guessin'.")
                    .pauseFor(2000)
                    .callFunction(answerInput)
                    .start()
                }}/>
                {riddleDone ?
                <>
                    <div className='answer-input-2'>
                        <SecondPuzzleAnswer/>
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


export default SecondPuzzlePage