import { React } from 'react';
import './Blog.css';
import blogBackground from '../../assets/background/blogBackground.jpg';
import HeadDescription from '../GeneralContent/HeadDescription';
import BlogFirstSection from './BlogFirstSection';
import BlogSecondSection from './BlogSecondSection';

export default function Blog () {
    return(
        <div className='blog'>
            <HeadDescription background={blogBackground} head='Blog'/>
            <BlogFirstSection/>
            <BlogSecondSection number='4'/>
        </div>
    )
}