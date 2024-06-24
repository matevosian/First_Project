import { NavLink } from 'react-router-dom';
import './Register.css';

function Register() {
    return(
        <form className='register'>
            <p>Your logo</p>
            <h3>Register</h3>
            <label htmlFor='firstname'>First Name:</label>
            <input id='firstname' type='text' placeholder='First Name:'/>
            <label htmlFor='lastname'>Last Name:</label>
            <input id='lastname' type='text' placeholder='Last Name:'/>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' placeholder='Email:'/>
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' placeholder='Password:'/>
            <NavLink to='/login'>
               <a className='a' href='#'>Log In</a>
            </NavLink>
                 <input className='button' type='button' value={'Create account'}/>
        </form>
    )
}

export default Register;