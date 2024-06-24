import { React, useState, useEffect } from 'react';
import './BlogSecondSection.css';
import BlogMainDiv from './BlogMainDiv';
import { BlogSecond } from '../../helper/arrays';
import { useNavigate } from 'react-router-dom';

export default function BlogSecondSection (props) {
    const[cards, setCards] = useState(BlogSecond);
    const navigate = useNavigate();
    useEffect(() => {
        return setCards(cards.sort(() => Math.random() - 0.5).slice(0, props.number));
    }, []);

    return(
        <section className='blogSecondSection'>
            <h2><span className='grayColor'>Latest </span>News</h2>
            <div className='blogSecondSectionFirst'>
            {
                cards.map((item) => {
                    
                    return <div onClick={() => {
                        navigate(`/blog/moreDetails/${item.id}`)
                    }}>
                         <BlogMainDiv 
                    key={item.id} 
                    img={item.img}
                    name={item.name} 
                    speciality={item.speciality} 
                    title={item.title} 
                    data={item.data}
                    />
                    </div>
                })
            }
            </div>
        </section>
    )
}