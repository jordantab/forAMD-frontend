import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import './DecisionPage.css'
import facemasks from '../videos/2.MOV'
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
            <img src={facemasks}/>
            <video src={confetti} autoPlay loop muted/>
            <div className="overlay"></div>
            
            <div className="navbar">
            {/* <NavBar/> */}
            </div>
            <div className="Boxes">
                <button onClick={Events}>
                    <p>Events</p>
                </button>
                {/* <button onClick={Suggestions}>
                    <p>Suggestions</p>
                </button> */}
                <button onClick={Surprise}>
                    <p>Surprise</p>
                </button>
            </div>
        </div>
        // <div className="Decision">
        //     <NavBar />
        // <div className="Boxes">
        //             <button onClick={Events} className="box">
        //                 <p>Events</p>
        //             </button>
        //             <button onClick={Suggestions} className="box">
        //                 <p>Suggestions</p>
        //             </button>
        //             <button onClick={Surprise} className="box">
        //                 <p>Surprise</p>
        //             </button>
        //     </div>
        // </div>
    )
}

export default DecisionPage