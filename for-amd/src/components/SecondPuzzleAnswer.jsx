import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from "react";
import './SecondPuzzleAnswer.css'

function SecondPuzzleAnswer() {
    const answer = useRef()
    const hist = useNavigate()
    const [shake, setShake] = useState(false)
    
    function verifyAnswer() {
        
        const input = {
            puzzle : "2",
            answer : answer.current.value
        }

        axios.post('https://for-amd.herokuapp.com/verifyPuzzle/',input).then((response => {
            if (response.data == 'True'){
                hist('/thirdpuzzle')
            }
            else if (response.data == "False") {
                setShake(true)
                setTimeout(() => {
                  setShake(false)
                }, 1000)
            }
        }
        ))
    }
    return (
        <div>
            <p>Format answer as City, Country (ex: Rome, Italy)</p>
            <div className={`answer-input ${shake ? 'shake' : ''}`}>
                <input
                type="text"
                id="header-search"
                placeholder='Answer'
                name="answer"
                ref={answer}
                />
            <button onClick={verifyAnswer}>Submit</button>
            </div>
        </div>
    )
}

export default SecondPuzzleAnswer