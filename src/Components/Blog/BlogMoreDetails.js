import { React, useEffect, useState } from 'react';
import './BlogMoreDetails.css';
import firstpeople from '../../assets/icon/firstPeople.svg';
import instaSvg from '../../assets/icon/Insta.svg';
import fbSvg from '../../assets/icon/Fb.svg';
import twiterSvg from '../../assets/icon/Twiter.svg';
import { BlogFirst } from '../../helper/arrays';
import { useParams } from 'react-router-dom';
import DivContentTree from '../Home/DivContentTree';
import BlogSecondSection from './BlogSecondSection';

export default function BlogMoreDetails () {
    const [item, setItem] = useState()
    const array = BlogFirst;
    const params = useParams();
    useEffect(()=>{
           setItem(array.find(el=>el.id==params.id))
    },[params.id])
    return(
        <div className='blogMoreDetails'>
            <h5>{item?.speciality}</h5>
            <h2>{item?.title}</h2>
            <p className='data'>{item?.data}</p>
            <img className='img' src={item?.img} alt='img'/>
            <div className='first'>
                <figure>
                     <img src={firstpeople} className='people' alt='people'/>
                     <figcaption>
                        <h3>Nattasha</h3>
                        <p className='speciality'>{item?.speciality}</p>
                     </figcaption>
                </figure>
                <div className='blogMoreDetailsSvgDiv'>
                    <img src={instaSvg} alt='Instagram'/>
                    <img src={fbSvg} alt='Facebook'/>
                    <img src={twiterSvg} alt='Twiter'/>
                </div>
            </div>
            <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
            </p>
            <h2 className='h2'>
                The Perfect Creativity
            </h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
            </p>
            <ul>
                <li>Efficiently myocardinate market-driven innovation.</li>
                <li>Idea-sharing with back end products.</li>
                <li>Ballpark value added activity to beta test.</li>
            </ul>
            <div className='blockquote'>
               <p>
                 “Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust  looking . Primchat was the modern what we were looking.”
               </p>
            </div>
            <h2 className='h2'>
                 Make real time a wireframes services
            </h2>
            <p>
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letrsheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <ol>
                <li>Efficiently myocardinate market-driven innovation.</li>
                <li>Idea-sharing with back end products.</li>
                <li>Ballpark value added activity to beta test.</li>
                <li>Voluptate at dolores ut dolor </li>
            </ol>
            <DivContentTree backgroundColor='#F5F5F5' icon={firstpeople} name={item?.name} job={item?.speciality} paragraph='Our team was able to teach themselves primchat in a day.its like using a shared email inboxust way more robust  looking.Primchat was the modern what we were looking.'/>
            <BlogSecondSection number='2'/>
        </div>
    )
}