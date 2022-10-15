import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;