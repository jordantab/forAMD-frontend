import NavBar from "../components/NavBar"
import './LandingPage.css'
import myVideo from "../videos/nye1.MOV";


function LandingPage() {
    return (
        <div className="Landing">
            <video loop autoPlay muted>
                <source src={myVideo} type="video/mp4"/>
            </video>
            <h2>a trip down memory lane</h2>
            <div className="navbar">
            <NavBar/>
            </div>
        </div>
    )
}

export default LandingPage