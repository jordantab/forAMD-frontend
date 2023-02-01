import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useRef } from "react";

function FirstPuzzleAnswer() {
    const answer = useRef()
    const hist = useNavigate()
    
    function verifyAnswer() {
        
        const input = {
            puzzle : "1",
            answer : answer.current.value
        }

        axios.post('https://for-amd.herokuapp.com/verifyPuzzle/',input).then((response => {
            if (response.data == 'True'){
                hist('/secondpuzzle')
            }
            else if (response.data == "False") {
                hist('/error')
            }
        }
        ))
    }
    return (
        <div>
            <div className='answerInput'>
                <p>Format answer as Month Day (ex: January 1)</p>
                <input
                type="text"
                id="header-search"
                placeholder='Answer'
                name="answer"
                ref={answer}
                />
            </div>
            <button onClick={verifyAnswer}>Submit</button>
        </div>
    )
}

export default FirstPuzzleAnswer