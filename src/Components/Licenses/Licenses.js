import { React } from 'react';
import './Licenses.css';
import lisecensesBackground from '../../assets/background/licensesBackground.jpg';
import HeadDescription from '../GeneralContent/HeadDescription';
import LicenseComponent from './LicenseComponent';
import Box from '@mui/material/Box';

export default function Licenses() {
    return(
        <div className='licenses'>
            <HeadDescription background={lisecensesBackground} head='Licenses'/>
            <LicenseComponent head='Licenses' >
                <Box>
                  Icons and Graphics are manually designed by the <span className='colorWord'>VictorFlow</span> Templates team. You may download these and edit them to fit your website without asking for permission or providing credit.
                </Box>
            </LicenseComponent>
            <LicenseComponent head='Icon & Graphics'>
                <Box>
                    Icons and Graphics are manually designed by the <span className='colorWord'>VictorFlow</span> Templates team. You may download these and edit them to fit your website without asking for permission or providing credit 
                    <br/><br/>
                    Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons
                    <br/><br/>
                    <h4>Phosphor Icons: Licenses</h4>
                </Box>
            </LicenseComponent>
            <LicenseComponent head='Photography'>
                <Box>
                    All images used in the <span className='colorWord'>Primarily</span> Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on <span className='colorWord'>Unsplash, Pexels‍.</span>
                    <br/><br/>
                    <h4>Unsplash : Licenses</h4>
                    <br/><br/>
                    <span className='colorWord'>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14</span>
                </Box>
            </LicenseComponent>
            <LicenseComponent head='Fonts'>
                <span className='colorWord'>Primarily</span> template uses free licensed <span className='colorWord'>Google Fonts</span>. Please check <span className='colorWord'>Jost</span> ,and <span className='colorWord'>Open Sans</span>
            </LicenseComponent>
        </div>
    )
}