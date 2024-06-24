import { React } from 'react';
import './HomeThirdSection.css';
import applicationsSvg from '../../assets/image/applicationsSvg.svg';
import oneImg from '../../assets/image/oneImg.svg';
import twoImg from '../../assets/image/twoImg.svg';
import treeImg from '../../assets/image/treeImg.svg';
import fourImg from '../../assets/image/fourImg.svg';
import DivContentTwo from './DivContentTwo';

export default function HomeThirdSection () {
    return(
        <section className='homeThirdSection'>
            <h2>
                <span className='colorWhite'>Why it is Worth Choosing</span> PrimePay.
            </h2>
            <div className='homeThirdSectionFirstDiv'>
                <div className='homeThirdSectionFirstDivFirst'>
                    <div className='firstChild'>
                    <h4>Integration other</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor
                        incididunt Laoreet non curabitur gravida
                        sagittis aliquam bibendum.
                    </p>
                    </div>
                    <img className='applicationImg' src={applicationsSvg} alt='svg'/>
                </div>
                <DivContentTwo img={oneImg} head='Safe & Security'
            paragraph='Easily integrate with all your need favorite tools through and APIsing including automatic '/>
            <DivContentTwo img={twoImg} head='Merchant account'
            paragraph='Easily integrate with all your need favorite tools through and APIsing including automatic '/>
            <DivContentTwo img={treeImg} head='Merchant account'
            paragraph='Easily integrate with all your need favorite tools through and APIsing including automatic '/>
            <DivContentTwo img={fourImg} head='Fast get paid'
            paragraph='Easily integrate with all your need favorite tools through and APIsing including automatic '/>
            </div>
        </section>
    )
}