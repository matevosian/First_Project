import { React } from 'react';
import './HomeSecondSection.css';
import audioSvg from '../../assets/icon/audioSvg.svg';
import secondPhone from '../../assets/image/secondPhone.svg';
import NumberContent from './NumberContent';

export default function HomeSecondsection () {
    return(
        <section className='homeSecondSection'>
            <div className='homeSecondSectionFirstDiv'>
                <h2>
                    <span className='colorWhite'>Send and receive </span>
                    payments 
                    <span className='colorWhite'> easily</span>
                </h2>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                </p>
                <p className='line'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img className='audioImg' src={audioSvg} alt='svg'/>
            </div>
            <img className='secondPhone' src={secondPhone} alt='svg' />
            <div className='homeSecondSectionSecondDiv'>
                <NumberContent head='12.000 +' paragraph='Downloaded'/>
                <NumberContent head='$10 M' paragraph='Transactions'/>
                <NumberContent head='1.000 +' paragraph='Feedback'/>
            </div>
        </section>
    )
}