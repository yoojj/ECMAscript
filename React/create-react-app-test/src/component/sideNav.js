import { NavLink } from 'react-router-dom';
import './_component.css'



const SideNav = () => {
    return (
        <ul className="component-side-nav">
            <li><NavLink to="/auth/login">login</NavLink></li>
            <li><NavLink to="/auth/logout">logout</NavLink></li>
        </ul>
    );
}



export default SideNav;
