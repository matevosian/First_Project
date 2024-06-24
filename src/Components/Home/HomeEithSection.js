import { React } from 'react';
import './HomeEithSection.css';
import BuyCard from '../GeneralContent/BuyCard';
import basic from '../../assets/image/basic.svg';
import standart from '../../assets/image/standart.png';
import premium from '../../assets/image/premium.png';

export default function HomeEithSection () {
    return(
        <section className='homeEithSection'>
            <h2>
            <span className='grayColor'>Our payment services</span> <br/> worldwide
            </h2>
            <div className='homeEithSectionFirst'>
                <BuyCard img={basic} money='$10.00' buttonBC='#D7D7D7' color='#231656'/>
                <BuyCard img={standart} money='$19.00' buttonBC='#231656' color='#FFFFFF'/>
                <BuyCard img={premium} money='$35.00' buttonBC='#D7D7D7' color='#231656'/>
            </div>
        </section>
    )
}