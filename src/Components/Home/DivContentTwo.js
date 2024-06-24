import { React } from 'react';
import './DivContentTwo.css';

export default function DivContentTwo (props) {
    return(
        <div className='divContentTwo'>
            <img src={props.img} alt='img'/>
            <h6>{props.head}</h6>
            <p>{props.paragraph}</p>
        </div>
    )
}