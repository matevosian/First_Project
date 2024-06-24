import { React } from 'react';
import './HomeSixthSection.css';
import trethPhone from '../../assets/image/trethPhone.png';
import fourthPhone from '../../assets/image/fourthPhone.png';
import fivethPhone from '../../assets/image/fivethPhone.png';
import CustomizedSwitches from '../GeneralContent/Switch';

export default function HomeSixthSection () {
    return(
        <section className='homeSixthSection'>
            <h2><span className='grayColor'>Feels great in low-light Mood for your</span> eye Protection</h2>
            <div className='homeSixthSectionFirst'>
                <img src={trethPhone} className='phone' alt='phone'/>
                <img src={fourthPhone} className='phone' alt='phone'/>
                <img src={fivethPhone} className='phone' alt='phone'/>
            </div>
            <div className='homeSixthSectionSecond'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                <CustomizedSwitches/>
            </div>

        </section>
    )
}