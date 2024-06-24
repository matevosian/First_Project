import { React } from 'react';
import './StyleGuide.css';
import styleGuideBackground from '../../assets/background/styleGuideBackground.jpg';
import HeadDescription from '../GeneralContent/HeadDescription';
import StyleGuideComponent from './StyleGuideComponent';
import StyleColor from './StyleColor';
import BasicButtons from '../Buttons/BasicButtons';

export default function StyleGuide () {
    return(
        <div className='styleGuide'>
            <HeadDescription background={styleGuideBackground} head='Style Guide'/>
            <StyleGuideComponent head='Color'>
                <div className='colorDiv'>
                    <StyleColor backgroundColor='#231656' head='Primary Color' colorName='231656'/>
                    <StyleColor backgroundColor='#625FFB' head='Secondary Color' colorName='625FFB'/>
                    <StyleColor backgroundColor='#4E4E4E' head='Content Color' colorName='4E4E4E'/>
                    <StyleColor backgroundColor='#F5F5F5' head='Background Color' colorName='F5F5F5'/>
                    <StyleColor backgroundColor='#F8F8F8' head='Grey Background Color' colorName='F8F8F8'/>
                </div>
            </StyleGuideComponent>
            <StyleGuideComponent head='Text'>
                    <div className='title'>
                        <h1 id='h1'>Heading H1 Title</h1>
                        <h2 id='h2'>Heading H2 Title</h2>
                        <h3 id='h3'>Heading H3 Title</h3>
                        <h4 id='h4'>Heading H4 Title</h4>
                        <h5 id='h5'>Heading H5 Title</h5>
                        <h6 id='h6'>Heading H6 Title</h6>
                    </div>
            </StyleGuideComponent>
            <StyleGuideComponent  head='Paragraph'>
                <div className='paragraph'>
                    <p>Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae vel magnam repudiandae ipsum repellat repudiandae. Voluptate at dolores ut dolor sint occaecati similique. Velit eius ab delectus temporibus.</p>
                </div>    
            </StyleGuideComponent>
            <StyleGuideComponent  head='List'>
               <div className='list'>
                <ul>
                        <li>Efficiently myocardinate market-driven innovation.</li>
                        <li>Idea-sharing with back end products</li>
                        <li>Ballpark value added activity to beta test.</li>
                        <li>Voluptate at dolores ut dolor </li>
                    </ul>
                    <ol>
                        <li>Efficiently myocardinate market-driven innovation.</li>
                        <li>Idea-sharing with back end products.</li>
                        <li>Ballpark value added activity to beta test.</li>
                        <li>Voluptate at dolores ut dolor </li>
                    </ol>
               </div>
            </StyleGuideComponent>
            <StyleGuideComponent head='Blockquote'>
                <div className='blockquote'>
                  <p>
                  “Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust  looking . Primchat was the modern what we were looking.”
                  </p>
                </div>
            </StyleGuideComponent>
            <StyleGuideComponent head='Button'>
                <div className='buttonsDiv'>
                    <BasicButtons value='default' backgroundColor='#231656'/> <BasicButtons value='default' backgroundColor='#231656'/>
                    <BasicButtons value='default' backgroundColor='#D7D7D7' color='#231656'/> <BasicButtons value='default' backgroundColor='#D7D7D7' color='#231656'/>
                </div>
            </StyleGuideComponent>
        </div>
    )
}