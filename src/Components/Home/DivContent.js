import { React } from 'react';
import './DivContent.css';

export default function DivContent (props) {
    return(
        <div className='divContent'>
            <img src={props.img} alt='svg'/>
            <h4>{props.head}</h4>
            <p>{props.paragraph}</p>
        </div>
    )
}