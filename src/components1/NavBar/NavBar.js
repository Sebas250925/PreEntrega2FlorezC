import "./NavBar.css";
import logo from "./logo4.png";
import {Link, NavLink } from "react-router-dom";
import {CardWidget} from "../CardWidget/CardWidget";
export const NavBar = () =>{
    return(
        <nav className="nav-container">
            <div className="navegacion">
                <img className='logo' src={logo} alt="logo" />
                <Link to = "/">Inicio</Link>
                <Link to = "/contacto">Contacto</Link>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva':
                'claseInactiva'} to = "Tienda/Electrodomesticos">Electrodomesticos</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva':
                'claseInactiva'} to = "Tienda/Muebles">Muebles</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva':
                'claseInactiva'} to = "Tienda/Tecnologia">Tecnología</NavLink>

                <div className="cart">
               
                    <Link to ="/cart">
                        <CardWidget/>
                    </Link>
               </div>
        
            </div>
     

        </nav>
    )
}



