import { React } from 'react';
import './CheckedParagraph.css';
import checked from '../../assets/icon/checked.svg';

export default function CheckedParagraph (props) {
    return(
        <div className='checkedParagraph'>
            <img src={checked} alt='checked'/>
            <p>{props.paragraph}</p>
        </div>
    )
}