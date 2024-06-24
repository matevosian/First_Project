import { React } from 'react';
import './NumberContent.css';

export default function NumberContent (props) {
    return(
        <div className='numberContent'>
            <h5>{props.head}</h5>
            <p>{props.paragraph}</p>
        </div>
    )
}