import { React } from 'react';
import './HomeSeventhSection.css';
import CheckedParagraph from '../GeneralContent/CheckedParagraph';
import blackCard from '../../assets/image/blackCard.svg';
import pinkCard from '../../assets/image/pinkCard.svg';

export default function HomeSeventhSection () {
    return(
        <section className='homeSeventhSection'>
            <div className='homeSeventhSectionFirst'>
                <h2>
                <span className='grayColor'>
                    Credit is the Fastest
                    Mobile  
                </span>
                     Banking Solution.
                </h2>
                <p>
                    Feels great in low-light Mood for your eye Protection
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                </p>
                <div className='homeSeventhSectionFirstChild'>
                    <CheckedParagraph paragraph='All your transaction'/>
                    <CheckedParagraph paragraph='Control your Budget'/>
                    <CheckedParagraph paragraph='Receipts transaction'/>
                    <CheckedParagraph paragraph='Find your expenses'/>
                    <CheckedParagraph paragraph='Experience Smart App'/>
                </div>
            </div>
            <div className='homeSeventhSectionSecond'>
                <img src={blackCard} className='blackCard' alt='Black Card'/>
                <img src={pinkCard} className='pinkCard' alt='Pink Card'/>
            </div>
        </section>
    )
}