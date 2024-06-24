import './NavbarLogo.css';
import navbarIcon from '../../assets/icon/navbarIcon.svg';

export default function NavbarLogo() {
    return(
        <figure className='navbarLogo'>
            <img src={navbarIcon} alt='Logo Icon'/>
            <figcaption>PrimePay.</figcaption>
        </figure>
    )
};