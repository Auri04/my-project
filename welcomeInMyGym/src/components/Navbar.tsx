import { useNavigate } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {

    const navigate= useNavigate();

    return(
        <nav className="navbar">
            <ul>
                <li>
                    <a onClick={()=>{navigate(`/`)}}>Home</a>
                </li>
                <li>
                    <a onClick={()=>{navigate(`/equipment-bookings`)}}>Attrezzi noleggiati</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;