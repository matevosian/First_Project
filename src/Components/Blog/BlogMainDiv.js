import { React } from 'react';
import './BlogMainDiv.css';

export default function BlogMainDiv (props) {
    return(
        <div className='blogMainDiv'>
            <img className='blogMainDivImg' src={props.img} alt='img'/>
            <h5>{props.speciality}</h5>
            <h3>{props.title}</h3>
            <div>
                <p>{props.data}</p>
                <div></div>
                <p>{props.name}</p>
            </div>
        </div>
    )
}