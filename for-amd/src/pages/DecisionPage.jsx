import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import './DecisionPage.css'

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
        <div className="Decision">
            <NavBar />
        <div className="Boxes">
                    <button onClick={Events} className="box">
                        <p>Events</p>
                    </button>
                    <button onClick={Suggestions} className="box">
                        <p>Suggestions</p>
                    </button>
                    <button onClick={Surprise} className="box">
                        <p>Surprise</p>
                    </button>
            </div>
        </div>
    )
}

export default DecisionPage