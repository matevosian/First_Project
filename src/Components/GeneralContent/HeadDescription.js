import { React } from 'react';
import './HeadDescription.css';

export default function HeadDescription(props) {
    return (
        <div className='headDescription'>
            <img src={props.background} alt='background'/>
            <h2>{props.head}</h2>
        </div>
    )
}