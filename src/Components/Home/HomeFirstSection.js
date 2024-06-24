import { React } from 'react';
import './HomeFirstSection.css';
import home from '../../assets/icon/account.svg';
import account from '../../assets/icon/money.svg';
import money from '../../assets/icon/home.svg';
import homeBackground from '../../assets/background/homeBackground.jpg';
import BasicButtons from '../Buttons/BasicButtons';
import DivContent from './DivContent';
import firstPhone from '../../assets/image/firstPhone.svg';
import moneyIcon from '../../assets/icon/moneyIcon.svg';
import cardIcon from '../../assets/icon/cardIcon.svg';
import messegeIcon from '../../assets/icon/messegeIcon.svg';

export default function HomeFirstSection () {
    return(
        <section className='homeFirstSection'>
            <img className='homeFirstSectionFirstBackground' src={homeBackground} alt='background'/>
            <div className='homeFirstSectionFirstDiv'>
                    <h1>
                        Ready To Launch Your
                        Online <span className='whiteColor'>Payment</span> App
                    </h1>
                    <p>A simple yet modern solution to showcase your app</p>
                    <BasicButtons value='Get Started' backgroundColor='#231656'/>
            </div>
            <img className='firstPhone' src={firstPhone} alt='svg'/>
            <img className='moneyIcon' src={moneyIcon} alt='svg'/>
            <img className='cardIcon' src={cardIcon} alt='svg'/>
            <img className='messegeIcon' src={messegeIcon} alt='svg'/>
            <div className='homeFirstSectionSecondDiv'>
                <DivContent img={account} head='Creat an account' paragraph='Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business'/>
                <DivContent img={home} head='Attach bank accounts' paragraph='Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business'/>
               <div className='moneysDiv'><DivContent  img={money} head='Send money' paragraph='Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business'/></div>
            </div>
        </section>
    )
}