import { Link } from 'react-router-dom';
import './_component.css'



const Logo = () => {
    return (
        <>
            <Link to="/" className="component-logo">
                로고
            </Link>
        </>
    );
}



export default Logo;
