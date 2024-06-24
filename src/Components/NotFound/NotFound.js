import { React } from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';
import error404 from '../../assets/image/404.jpg';
import BasicButtons from '../Buttons/BasicButtons';

export default function NotFound() {
    return(
        <div className="notFound">
            <img className='errorImg' src={error404} alt='404'/>
            <h3 className='h2'>Oops! Page not found</h3>
            <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue 
                pretium faucibus leo nisl nulla pharetra nullam.
            </p>
            <NavLink to='/'>
              <BasicButtons value='Go to Homepage' backgroundColor='#231656' />
            </NavLink>
        </div>
    )
}