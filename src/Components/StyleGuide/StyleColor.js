import { React } from 'react';
import './StyleColor.css';

export default function StyleColor (props) {
    return(
        <div className='styleColor'>
            <div style={{
                backgroundColor: props.backgroundColor,
            }}></div>
            <h6>{props.head}</h6>
            <p>{props.colorName}</p>
        </div>
    )
}