import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import './DecisionPage.css'
import facemasks from '../videos/facemasks.MOV'
import confetti from '../videos/confetti.mov'

function DecisionPage() {
    const hist = useNavigate()

    function Events() {
        hist('/events')
    }

    function Suggestions(){
        hist('/error')
    }

    function Surprise(){
        hist('/surprise')
    }

    return (
        <div className="Decisions">
            <video className='eventsVideo' src={facemasks} autoPlay loop muted/>
            <video className='surpriseVideo' src={confetti} autoPlay loop muted/>
            <div className="overlay"></div>
            
            <div className="navbar">
            {/* <NavBar/> */}
            </div>
            <div className="Boxes">
                <button onClick={Events}>
                    <p>Events</p>
                </button>
                <button onClick={Surprise}>
                    <p>Surprise</p>
                </button>
            </div>
        </div>
    )
}

export default DecisionPage