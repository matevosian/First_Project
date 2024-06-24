import { React } from 'react';
import './PasswordProtect.css';
import passwordBackground from '../../assets/background/passwordBackground.jpg';
import HeadDescription from '../GeneralContent/HeadDescription';
import BasicInput from '../Inputs/BasicInput';
import BasicButtons from '../Buttons/BasicButtons';

export default function PasswordProtect () {
    return(
        <div className='passwordProtect'>
            <HeadDescription background={passwordBackground} head='Password Protected'/>
            <div className='passwordProtectContent'>
                <h3>Enter Page Password!</h3>
                <p>
                    This page is password protected. If you are the website admin, or have access
                    to this page, please type your
                    password below.
                </p>
                <BasicInput type='password' placeholder='Enter Your Password' width='100%'/>
                <BasicButtons backgroundColor='#231656' value='submit' width='180px'/>
            </div>
        </div>
    )
}