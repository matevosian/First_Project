import { React } from 'react';
import './BuyCard.css';
import BasicButtons from '../Buttons/BasicButtons';

export default function BuyCard (props) {
    return(
        <div className='buyCard'>
            <img className='buyCardImg' alt='img' src={props.img}/>
            <div>
                <p className='buyCardMoney'>{props.money}</p>
                <p className='buyCardMonth'>Month</p>
            </div>
            <ul className='buyCardList'>
                    <li>Modern Design</li>
                    <li>Easy to Customize</li>
                    <li>Quickly Set Up A Website</li>
                    <li>Another Feature</li>
                    <li>24/7 Customer Support</li>
            </ul>
            <BasicButtons value='Get Started' backgroundColor={props.buttonBC} color={props.color} width='100%'/>
        </div>
    )
}