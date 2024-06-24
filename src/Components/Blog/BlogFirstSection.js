import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogFirstSection.css';
import blogOneImg from '../../assets/image/blogOneImg.png';
import BlogDiv from './BlogDiv';
import BlogMainDiv from './BlogMainDiv';
import BasicInput from '../Inputs/BasicInput';
import BasicButtons from '../Buttons/BasicButtons';
import { blogThreeth } from '../../helper/arrays';

export default function BlogFirstSection () {
    const[cards, setCards] = useState(blogThreeth);
    const navigate = useNavigate();

    useEffect(() => {
        return setCards(cards.sort(() => Math.random() - 0.5).slice(0, 3))
    }, [])

    return(
        <section className='blogFirstSection'>
            <div className='first'>
            <h2><span className='grayColor'>News </span>Articles</h2>
            <div>
                <BasicInput type='email' placeholder='Enter your email'/>
                <BasicButtons value='Search' backgroundColor='#231656'/>
            </div>
            </div>
           <div className='blogComponentDiv'>
             <div onClick={() => {
                        navigate('moreDetails/1')
                    }}>
             <BlogMainDiv 
                    key={1} 
                    img={blogOneImg}
                    name={'Nattasha'} 
                    speciality={'Business'} 
                    title={'Great productivity apps you can download for free this week on iPhone'} 
                    data={'May 02, 2022'}/>
             </div>

            <div className='blogFirstSectionFirst'>
            {
                cards.map((item) => {
                    return <div onClick={() => {
                        navigate(`moreDetails/${item.id}`)
                    }}>
                    <BlogDiv 
                    key={item.id} 
                    img={item.img}
                    name={item.name} 
                    speciality={item.speciality} 
                    title={item.title} 
                    data={item.data}/>
                    </div>
                })
            }
            </div>
           </div>
        </section>
    )
}