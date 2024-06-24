import { React } from 'react';
import './HomeFourthSection.css';
import secondBackground from '../../assets/background/secondBackground.png';
import DivContentTree from './DivContentTree';
import firstPeople from '../../assets/icon/firstPeople.svg';
import secondPeople from '../../assets/icon/secondPeople.svg';
import thirdPeople from '../../assets/icon/thirthPeople.svg';
// import star from '../../assets/icon/star.svg';

export default function HomeFourthSection () {
    return(
        <section className='homeFourthSection'>
            <img className='secondBackground' src={secondBackground} alt='background'/>
            <h2><span className='whiteSpan'>“Say goodbye to clutter and</span><br/> bounce rates.</h2>
            <DivContentTree icon={firstPeople} name='Nattasha' job='Designer'  paragraph='Our team was able to teach themselves primchat in a day.its like using a shared email inboxust way more robust  looking. Primchat was the modern what we were looking' />
            <DivContentTree icon={secondPeople} name='Joe Cook' job='Developer'  paragraph='Our team was able to teach themselves primchat in a day.its like using a shared email inboxust way more robust  looking. Primchat was the modern what we were looking' />
            <DivContentTree icon={thirdPeople} name='Jessica Jobs' job='Product Designer at Uber.INC' paragraph='Our team was able to teach themselves primchat in a day.its like using a shared email inboxust way more robust  looking. Primchat was the modern what we were looking' />
        </section>
    )
}