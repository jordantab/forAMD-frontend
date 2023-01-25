import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="topnav">
            <div className="left"><a>forAMD</a></div>
            <div className="right"> 
            <Link to='/login'>Login</Link>
            </div>            
        </div>

    );
}
export default NavBar;