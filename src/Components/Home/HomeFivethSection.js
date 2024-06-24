import { React } from 'react';
import './HomeFivethSection.css';
import awards from '../../assets/image/awards.png';
import starRating from '../../assets/image/starRating.png';

export default function HomeFivethSection () {
    return(
        <section className='homeFivethSection'>
            <img className='awards' src={awards} alt='Awards'/>
            <img className='starRating' src={starRating} alt='Star Rating'/>
        </section>
    )
}