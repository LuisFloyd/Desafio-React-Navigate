import { NavLink } from "react-router-dom";
import '../assets/css/navbar.css';
import mapa from '../assets/img/mapa.png';

function Navbar() {
    const setActiveClass = ({isActive}) => (isActive ? 'active' : 'inactive')
    return(
        <div className='container-fluid'>
            <nav className="navbar container" >
                <div>
                    <img className='icono' src = {mapa} alt="icono mapa" />
                </div>
                <div>
                    <NavLink className={setActiveClass} to='/'>HOME</NavLink>
                    <NavLink className={setActiveClass} to='/pokemones'>Pokemones</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;