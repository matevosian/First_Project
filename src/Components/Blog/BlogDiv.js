import { React } from 'react';
import './BlogDiv.css';

export default function BlogDiv (props) {
    return(
        <div className='blogDiv'>
            <img className='blogDivImg' src={props.img} alt='img'/>
            <div className='blogDivFirst'>
                <h5>
                    {props.speciality}
                </h5>
                <h4>
                    {props.title}
                </h4>
                <div>
                    <p>
                       {props.data}  
                    </p>
                    <div></div>
                    <p>
                        {props.name}
                    </p>
                </div>
            </div>
        </div>
    )
}