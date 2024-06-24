import { React } from 'react';
import './StyleGuideComponent.css';

export default function StyleGuideComponent (props) {
    return(
        <div className='styleGuideComponent'>
            <h2>{props.head}</h2>
            <div>{props.children}</div>
        </div>
    )
}