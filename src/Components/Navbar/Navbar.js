import { React } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import BasicButtons from '../Buttons/BasicButtons';
import NavbarLogo from './NavbarLogo';
import MenuListComposition from '../MenuLinks/MenuLinks';

export default function Navbar() {
    return(
        <header className='navbar'>
            <nav>
                <NavLink to='/'>
                <NavbarLogo/>
                     </NavLink>
                <div className='navbarLinks'>
                    <MenuListComposition/>
                <ul className='navbarList'>
                    <li>
                        <NavLink to='/aboutUs' className='navbarLink'>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/features' className='navbarLink'>
                          Features
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/pircing' className='navbarLink'>
                          Pricing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' className='navbarLink'>
                          Blog
                        </NavLink>
                    </li>
                </ul>
                <NavLink to='/login'>
                    <BasicButtons value='Login' backgroundColor='#231656'/>
                </NavLink>
                </div>
            </nav>
        </header>
    )
};

