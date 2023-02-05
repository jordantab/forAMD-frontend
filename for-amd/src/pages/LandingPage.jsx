import NavBar from "../components/NavBar"
import './LandingPage.css'
import myVideo from "../videos/1.MOV";
import myVideo2 from "../videos/nye1.MOV";
import myVideo3 from "../videos/2.MOV";
import myVideo4 from "../videos/facemasks.MOV";


function LandingPage() {
    return (
        <div className="Landing">
            <video loop autoPlay muted>
                <source src={myVideo} type="video/mp4"/>
            </video>
            <h2>a trip down memory lane</h2>
            <div className="navbar">
            <NavBar className="navbar"/>
            </div>
        </div>
    )
}

export default LandingPage