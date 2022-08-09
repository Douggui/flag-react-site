import { NavLink } from "react-router-dom";


const Nav = () => {

    return (
        <div className="navigation">
            <NavLink exact="true" to="/" >
                Accueil
            </NavLink>
            <NavLink exact="true" to="/apropos" >
                À propos
            </NavLink>
            <NavLink exact="true" to="/nouvelles">News</NavLink>
        </div>
    )
}
export default Nav;