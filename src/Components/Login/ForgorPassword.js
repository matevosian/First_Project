import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ForgotPassword.css';

export default function ForgotPassword() {
    const[crpas, setCrpas] = useState('');
    return(
        <form className='forgot'>
            <p>Forgot Your password?</p>
            <h3>Password</h3>
            <div className='questionDiv'>
                <h4 onClick={() => setCrpas('email')}>Email</h4> 
                <p>or</p>
                <h4 onClick={() => setCrpas('phone')}>Phone</h4>
            </div>
            {
                crpas === 'email' && (
                    <>
                        <label htmlFor='email'>Email:</label>
                        <input id='email' type='email' placeholder='Email:'/>
                    </>
                ) ||

                crpas === 'phone' && (
                    <>
                        <label htmlFor='number'>Phone:</label>
                        <input id='number' type='number' placeholder='Phone:'/>
                    </>
                )
            }
            
           
            <NavLink to='/login'>
                <a className='a' href='#'>Log In</a>
            </NavLink>
            <NavLink to='/next'>
                <input className='button' type='button' value={'Next'}/>
            </NavLink>
        </form>
    )
}
