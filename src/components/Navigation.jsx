import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul className='row-auto'>
                <li><NavLink to="/" className="hover:underline col">Home</NavLink></li>
                <li><NavLink to="/about" className="hover:underline col-span-1">About</NavLink></li>
                <li><NavLink to="/projects" className="hover:underline">Projects</NavLink></li>
                <li><NavLink to="/MyContactInfo" className="hover:underline">Contact</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navigation;