import {  NavLink } from 'react-router-dom';
import './Next.css';

function Next() {
    return(
        <form className='next'>
            <p>Got the code?</p>
            <h3>Password</h3>
            <label htmlFor='number'>Write your code:</label>
            <input id='number' type='number' placeholder='******'/>
            <NavLink to='/login'>
            <a className='a' href='#'>Log In</a>
            </NavLink>
            <input className='button' type='button' value={'Next'}/>
        </form>
    )
}

export default Next;