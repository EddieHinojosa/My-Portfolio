import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
                <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
                <li><NavLink to="/projects" className="hover:underline">Projects</NavLink></li>
                <li><NavLink to="../pages/contact.jsx" className="hover:underline">Contact</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navigation;