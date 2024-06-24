import { NavLink } from 'react-router-dom';
import './Login.css';

export default function Login() {
    return(
        <form className='login'>
            <p>Your logo</p>
            <h3>Login</h3>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' placeholder='Email:'/>
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' placeholder='Password:'/>
            <NavLink to='/forgot'>
                <a className='a' href='#'>Forgot Password?</a>
            </NavLink>
            <NavLink to='/register'>
                 <a className='a' href='#'>Create account?</a>
            </NavLink>
            <input className='button' type='button' value={'Sign In'}/>
        </form>
    )
}
