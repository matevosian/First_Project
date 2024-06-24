import { React } from 'react';
import './Changelog.css';
import HeadDescription from '../GeneralContent/HeadDescription';
import changelogBackground from '../../assets/background/changelogBackground.jpg';
import v1 from '../../assets/icon/v1.svg'

export default function Changelog () {
    return (
        <div className='changelog'>
                <HeadDescription background={changelogBackground} head='Changelog'/>
            <div className='changelogContent'>
                <img src={v1} alt='v1'/>
                <h5>The template has been released! 🎉</h5>
            </div>
        </div>
    )
}
