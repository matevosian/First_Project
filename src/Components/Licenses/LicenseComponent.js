import { React } from 'react';
import './LicenseComponent.css';


export default function LicenseComponent (props) {
    return(
        <div className='licenseComponent'>
            <h3>{props.head}</h3>
            <p>{props.children}</p>
        </div>
    )
}