import { React } from 'react';
import './BasicInput.css';

export default function BasicInput (props) {
    return (
        <input type={props.type} placeholder={props.placeholder} className='basicInput' style={
            {width: props.width,}
        }/>
    )
}