import { React } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import instagramIcon from '../../assets/icon/Insta.svg';
import facebookIcon from '../../assets/icon/Fb.svg';
import twiterIcon from '../../assets/icon/Twiter.svg';
import inIcon from '../../assets/icon/In.svg';
import youtubeIcon from '../../assets/icon/Youtube.svg';
import background from '../../assets/background/footerBackground.png';
import BasicButtons from '../Buttons/BasicButtons';
import BasicInput from '../Inputs/BasicInput';
import NavbarLogo from '../Navbar/NavbarLogo';

export default function Footer() {
    return(
        <footer className='footer'>
            <div className='first'>
                <img src={background} alt='Background'/>
                <h2>
                    Take control of your
                    personal <span>finances today</span>
                </h2>
                <form>
                    <BasicInput type='email' placeholder='Enter your email'/>
                        <NavLink to='/login'>
                    <BasicButtons value='Subscribe' backgroundColor='#231656' />
                    </NavLink>
                </form>
            </div>
            <div className='second'>
                <div className='footerDescription'>
                    <NavbarLogo/>
                    <p>
                        Lorem ipsum dolor sitonsecteturadipisicing elit sed do eiusmod temporincididunt Laoreet non 
                        sagittis aliquam bibendum.
                    </p>
                    <div>
                        <img src={instagramIcon} alt='instagram'/>
                        <img src={facebookIcon} alt='facebook'/>
                        <img src={twiterIcon} alt='twiter'/>
                        <img src={inIcon} alt='in'/>
                        <img className='youtube' src={youtubeIcon} alt='youtube'/>
                  </div>
                </div>
                <div className='footerLinks'>
                    <nav>
                        <h4>Menu</h4>
                        <ul>
                            <li>About</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <NavLink to='/blog'>
                             <li>Blog</li>
                            </NavLink>
                            <li>How it Work</li>
                        </ul>
                    </nav>
                    <nav>
                        <h4>Utility pages</h4>
                        <ul>
                            <NavLink to='/styleGuide'>
                             <li>Style guide</li>
                            </NavLink>
                            <NavLink to='/passwordProtect'>
                                <li>Password protected</li>
                            </NavLink>
                            <NavLink to='/**'>
                                <li>404 Not found</li>
                            </NavLink>
                            <NavLink to='/licenses'>
                                <li>Licenses</li>
                            </NavLink>
                            <NavLink to='/changelog'>
                                <li>Changelog</li>
                            </NavLink>
                        </ul>
                    </nav>
                    <nav className='adress'>
                        <h4>Address</h4>
                        <ul>
                            <li>A1700 W Blancke St, kiyev 
                                port south USA, America
                            </li>
                            <li>
                                +3255 456 789
                                mail@primpay.com
                            </li>
                            <BasicButtons value=' Get A Quote' backgroundColor='background: #625FFB'/>
                        </ul>
                    </nav>
                </div>
            </div>
            <h5>
            Copyright © <b>Primarily</b> | Designed by VictorFlow Templates 
            </h5>
        </footer>
    )
};