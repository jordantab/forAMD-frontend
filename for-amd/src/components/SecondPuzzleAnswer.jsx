import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useRef } from "react";

function SecondPuzzleAnswer() {
    const answer = useRef()
    const hist = useNavigate()
    
    function verifyAnswer() {
        
        const input = {
            puzzle : "2",
            answer : answer.current.value
        }

        axios.post('http://127.0.0.1:8000/verifyPuzzle/',input).then((response => {
            if (response.data == 'True'){
                hist('/thirdpuzzle')
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

export default SecondPuzzleAnswer