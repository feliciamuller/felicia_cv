import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css'
const Menu = ()=>{
    return (
        <div className='navbar'>
            <div className = 'menu-container'>
                <ul className='nav-links'>
                    <li>
                        <Link to = "/" className = 'nav-link'>Hem</Link>
                    </li>
                    <li>
                        <Link to = "/about" className = 'nav-link'>Vem är jag?</Link>
                    </li>
                    <li>
                        <Link to = "/CV" className = 'nav-link'>CV</Link>
                    </li>
                    <li>
                        <Link to = "/portfolio" className = 'nav-link'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to = "/contact" className = 'nav-link'>Kontakt</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Menu;